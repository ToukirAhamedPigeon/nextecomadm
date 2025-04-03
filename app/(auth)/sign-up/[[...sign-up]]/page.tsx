import React from 'react';
import { SignUp } from '@clerk/nextjs';
export default function Page(){
    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <SignUp />
        </div>
    );
};

//Nextjs dynamic metadata
export const metadata = {
    title: "NextEcom Admin | Sign Up",
    description: "Sign Up to your account",
    icons: {
        icon: "/favicon.svg",
    },
};