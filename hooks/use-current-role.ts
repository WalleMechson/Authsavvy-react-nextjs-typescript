import { useSession } from "next-auth/react";

export const useCurrentRole = () => useSession()?.data?.user?.role;