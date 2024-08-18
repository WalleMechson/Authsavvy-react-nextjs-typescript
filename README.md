<div align="center">
  <br/>
  <br/>
            <h1 style="font-size: 70px;">🔐</h1>
  <br/>
  <br/>
  <p>
    Authsavvy is a project centered around Auth.js (Previously known as NextAuth). it consists from everything that you might want to get from Auth.js
  </p>

  <p>
    <a href="https://github.com/GeriFixit/auth-savvy/graphs/contributors">
      <img src="https://img.shields.io/github/contributors/GeriFixit/auth-savvy" alt="contributors" />
    </a>
    <a href="">
      <img src="https://img.shields.io/github/last-commit/GeriFixit/auth-savvy" alt="last update" />
    </a>
    <a href="https://github.com/GeriFixit/auth-savvy/network/members">
      <img src="https://img.shields.io/github/forks/GeriFixit/auth-savvy" alt="forks" />
    </a>
    <a href="https://github.com/GeriFixit/auth-savvy/stargazers">
      <img src="https://img.shields.io/github/stars/GeriFixit/auth-savvy" alt="stars" />
    </a>
    <a href="https://github.com/GeriFixit/auth-savvy/issues/">
      <img src="https://img.shields.io/github/issues/GeriFixit/auth-savvy" alt="open issues" />
    </a>
  </p>
   
  <h4>
    <a href="https://authsavvy.vercel.app">View Demo</a>
    <span> · </span>
    <a href="https://github.com/GeriFixit/auth-savvy/blob/main/readme.md">Documentation</a>
    <span> · </span>
    <a href="https://github.com/GeriFixit/auth-savvy/issues/">Report Bug</a>
    <span> · </span>
    <a href="https://github.com/GeriFixit/auth-savvy/issues/">Request Feature</a>
  </h4>
</div>

<br/>

# Authsavvy by Geri Fixit (pseudo-name)

### Project built while following the course by Antonio (Coding with Antonio)

## Features

1. **Credential Authentication/Authorization:**
   - Classical Email/Password Authentication;
3. **Protected/Public Routes:**
   - Controlled routes based on the current state of auth;
4. **Email Verification:**
   - Ensures email confirmation while registering new account;
5. **Github/Google Provider authentication:**
   - Implemented Github/Google authentication providers;
6. **Password recovery:**
   - Impemented an ability to recover password;
8. **Server/Client side actions:**
   - Settings route (after successfull authentication) displays "Client" and "Server" side fetching of data;
9. **Two Factor Authentication System:**
   - Once used is authenticated (with Classical Credential provider), he/she can enable 2FA;
10. **Update Settings once authorized:**
   - Settings route gives users an abiliy to manipulate their data, to change: Password, Email, Name, Role and givs users an ability to enable 2FA.


<br/>

## Installation

- Clone the repository:

  ```bash
  git clone https://github.com/GeriFixit/auth-savvy
  ```

- Navigate to the project directory:

  ```bash
  cd auth-savvy
  ```

- Install the dependencies:

  ```bash
  npm install
  ```

- Create .env file and setup all the neccessary env variables (given project uses Neon.tech as a rdms provider)

```

DATABASE_URL=""

AUTH_SECRET=""

GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""

GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""

RESEND_API_KEY=""

NEXT_PUBLIC_APP_URL=""
```

- Set up Neon.tech and generate/push Prisma models:

  1. Open new terminal and exec `npx prisma generate`
  2. then `npx prisma db push`
  
<br/>

## Usage

- Start the development server:

  ```bash
  npm run dev
  ```

- Open your browser and visit `http://localhost:3000` to access the application.

<br/>

## :camera: Screenshots
| --- | --- |
| <kbd><img width="890" alt="login" src="https://github.com/GeriFixit/Realtime-Supabase-React-Dashboard/blob/main/assets/2faCodePage.PNG"></kbd> | <kbd><img width="890" alt="login" src="https://github.com/GeriFixit/Realtime-Supabase-React-Dashboard/blob/main/assets/adminActionsPermissionsPage.PNG"></kbd> |
| <kbd><img width="890" alt="login" src="https://github.com/GeriFixit/Realtime-Supabase-React-Dashboard/blob/main/assets/clientSideActionsPage.PNG"></kbd> | <kbd><img width="890" alt="login" src="https://github.com/GeriFixit/Realtime-Supabase-React-Dashboard/blob/main/assets/editSettingsPage.PNG"></kbd> |
| <kbd><img width="890" alt="login" src="https://github.com/GeriFixit/Realtime-Supabase-React-Dashboard/blob/main/assets/loginPage.PNG"></kbd> | <kbd><img width="890" alt="login" src="https://github.com/GeriFixit/Realtime-Supabase-React-Dashboard/blob/main/assets/passwordRecoveryPage.PNG"></kbd> |
| <kbd><img width="890" alt="login" src="https://github.com/GeriFixit/Realtime-Supabase-React-Dashboard/blob/main/assets/registrationPage.PNG"></kbd> | <kbd><img width="890" alt="login" src="https://github.com/GeriFixit/Realtime-Supabase-React-Dashboard/blob/main/assets/serverSideActionsPage.PNG"></kbd> |
<br/>

<br/>

## Contributing

Contributions are welcome! If you want to contribute to this project, please follow these steps:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Commit your changes to the new branch.
- Open a pull request back to the main repository, including a description of your changes.
