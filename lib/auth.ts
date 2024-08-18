import { auth } from "@/auth";

export const currentUser = async () => await auth().then((data)=> data?.user);

export const currentRole = async () => await auth().then((data)=> data?.user?.role);