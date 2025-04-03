import React from 'react';
import { SignIn } from '@clerk/nextjs';
export default function Page(){
    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <SignIn />
        </div>
    );
};

//Nextjs dynamic metadata
export const metadata = {
    title: "NextEcom Admin | Sign In",
    description: "Sign In to your account",
    icons: {
        icon: "/favicon.svg",
    },
};