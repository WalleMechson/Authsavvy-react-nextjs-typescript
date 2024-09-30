"use server";

import * as z from "zod";

import bcrypt from "bcryptjs";

import { db } from "@/lib/db";

import { NewPasswordSchema } from "@/schemas";
import { getPasswordResetTokenByToken } from "@/data/password-reset-token";
import { getUserByEmail } from "@/data/user";

export const newPassword = async (
  values: z.infer<typeof NewPasswordSchema>,
  token?: string | null
) => {
  if (!token) return { error: "Missing token!" };

  const validateFields = NewPasswordSchema.safeParse(values);

  if (validateFields.data?.password !== validateFields.data?.confirmPassword)
    return { error: "Passwords do not match" };

  if (!validateFields.success) {
    return { error: "Invalid fields" };
  }

  const { password } = validateFields.data;
  const existingToken = await getPasswordResetTokenByToken(token);

  if (!existingToken) return { error: "Invalid Token" };

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) return { error: "Token has expired" };

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    return { error: "Email does not exists" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.user.update({
    where: { id: existingUser.id },
    data: {
      password: hashedPassword,
    },
  });

  await db.passwordResetToken.delete({
    where: { id: existingToken.id },
  });

  return { success: "Password updated!" };
};