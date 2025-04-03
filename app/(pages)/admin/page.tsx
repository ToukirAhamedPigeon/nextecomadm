import React from 'react';
import { SignOutButton, UserButton } from '@clerk/nextjs';

// Nextjs ISR caching strategy
export const revalidate = false;

export default function page(){
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <SignOutButton />
            <UserButton />
        </div>
    );
};

// Nextjs dynamic metadata
export function generateMetadata() {
    return {
        title: `Admin Dashboard`,
        description: `Admin Dashboard`,
        icons: {
            icon: `/favicon.svg`,
        },
    };
}
