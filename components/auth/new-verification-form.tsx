"use client";

import { useSearchParams } from "next/navigation";
import { CardWrapper } from "./card-wrapper";
import { BeatLoader } from "react-spinners";
import { useCallback, useEffect, useState } from "react";
import { newVerification } from "@/actions/new-verification";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";

const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if(!token) {
      setError("Missing token!");
      return;
    }
    newVerification(token).then((data) => {
      setSuccess(data.success);
      setError(data.error);
    }).catch(() => {
      setError("Something went wrong!");
    });
  }, [token])

  useEffect(() => {
    onSubmit();
  }, [onSubmit])

  return (
    <CardWrapper
      headerLabel="Confirming your verification"
      backButtonHref="Back to login"
      backButtonLabel="/auth/login"
    >
      <div className="w-full flex items-center justify-center">
        {!error && !success && (<BeatLoader />)}
        <FormError message={error} />
        <FormSuccess message={success} />
      </div>
    </CardWrapper>
  );
};

export default NewVerificationForm;
