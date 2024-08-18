"use client"

import { signOut } from "next-auth/react";

interface logoutButtonProps {
    children?: React.ReactNode;
}

export const LogoutButton = ({
    children
}: logoutButtonProps) => {
    const onClick = () => {
        signOut();
    }
    return (
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    )
}