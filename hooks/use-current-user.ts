import { useSession } from "next-auth/react";

export const useCurrentUser = () => useSession()?.data?.user;