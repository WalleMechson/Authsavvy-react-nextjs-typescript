import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendTwoFactorTokenEmail = async (
    email: string,
    token: string,
) => {
    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: "Two Factor Confirmation Code",
        html: `<body style="font-family: Arial, sans-serif; background-color: #3367d6; margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; height: 100vh;">
        <div style="background-color: #ffffff; border-radius: 8px; padding: 30px; text-align: center; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <h1 style="font-size: 70px;">🔐</h1>
            <h1 style="font-size: 24px; margin-bottom: 10px; color: #333333;">2FA code</h1>
            <p style="font-size: 16px; color: #666666; margin-bottom: 30px;">Use code below to as for 2FA verification code</p>
            <span style="display: inline-block; background-color: #3367d6; color: white; padding: 15px 25px; border-radius: 5px; text-decoration: none; font-size: 16px; font-weight: bold;">${token}</span>
        </div>
    </body>`,
    }); 
}

export const sendPasswordResetEmail = async (
    email: string,
    token: string,
) => {
    const confirmLink = `${domain}/auth/new-password?token=${token}`;

    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: "Confirm your email",
        html: `<body style="font-family: Arial, sans-serif; background-color: #3367d6; margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; height: 100vh;">
        <div style="background-color: #ffffff; border-radius: 8px; padding: 30px; text-align: center; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <h1 style="font-size: 70px;">🔐</h1>
            <h1 style="font-size: 24px; margin-bottom: 10px; color: #333333;">Forgot password</h1>
            <p style="font-size: 16px; color: #666666; margin-bottom: 30px;">Click below to reset your password</p>
            <a href="${confirmLink}" style="display: inline-block; background-color: #3367d6; color: white; padding: 15px 25px; border-radius: 5px; text-decoration: none; font-size: 16px; font-weight: bold;">Verify your email</a>
            <a href="${confirmLink}" style="display: block; margin-top: 20px; font-size: 14px; color: #3367d6; text-decoration: none; word-break: break-all;">${confirmLink}</a>
        </div>
    </body>`,
    }); 
}

export const sendVerificationEmail = async (
    email: string,
    token: string,
) => {
    const confirmLink = `${domain}/auth/new-verification?token=${token}`;

    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: "Confirm your email",
        html: `<body style="font-family: Arial, sans-serif; background-color: #3367d6; margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; height: 100vh;">
        <div style="background-color: #ffffff; border-radius: 8px; padding: 30px; text-align: center; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <h1 style="font-size: 70px;">🔐</h1>
            <h1 style="font-size: 24px; margin-bottom: 10px; color: #333333;">Verify your email address</h1>
            <p style="font-size: 16px; color: #666666; margin-bottom: 30px;">You've entered <strong>${email}</strong> as the email address for your account.<br>
            Please verify this email address by clicking the button below.</p>
            <a href="${confirmLink}" style="display: inline-block; background-color: #3367d6; color: white; padding: 15px 25px; border-radius: 5px; text-decoration: none; font-size: 16px; font-weight: bold;">Verify your email</a>
            <a href="${confirmLink}" style="display: block; margin-top: 20px; font-size: 14px; color: #3367d6; text-decoration: none; word-break: break-all;">${confirmLink}</a>
        </div>
    </body>`,
    })
}   