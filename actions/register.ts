"use server";
import bcrypt from 'bcryptjs';

import * as z from "zod";

import { RegisterSchema } from "@/schemas";
import { db } from '@/lib/db';
import { getUserByEmail } from '@/data/user';
import { generateVerificationToken } from '@/data/tokens';
import { sendVerificationEmail } from '@/lib/mail';

export const Register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const {email, name, password} = validatedFields.data;

  validatedFields.data.password = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if(existingUser) return {error: "Email already in use"};

  await db.user.create({
    data: {
      ...validatedFields.data
    }
  })

  const verificationToken = await generateVerificationToken(email);
  
  await sendVerificationEmail(
    verificationToken.email,
    verificationToken.token
  );

  return { success: "Confirmation email sent!" };
};