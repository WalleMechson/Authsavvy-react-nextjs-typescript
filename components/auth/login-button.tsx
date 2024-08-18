"use client"

import {useRouter} from 'next/navigation';
import{
    Dialog,
    DialogTrigger,
    DialogContent
} from '@/components/ui/dialog'
import { LoginForm } from './login-form';


interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect";
    asChild?: boolean;
}

export const LoginButton = ( {
    children,
    mode = 'redirect',
    asChild
}: LoginButtonProps) => {
    const router = useRouter();

    function onClick() {
        router.push('/auth/login');
    }

    if(mode === "modal") {
        return (
            <Dialog>
                <DialogTrigger asChild={asChild}>
                    {children}
                </DialogTrigger>
                <DialogContent className="p-0 w-auto bg-transparent">
                    <LoginForm />
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    )
}