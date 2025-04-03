import PageButtons from '@/components/modules/marketing/contents/PageButtons';
import Socials from '@/components/modules/marketing/contents/Socials';
import WelcomeMessage from '@/components/modules/marketing/contents/WelcomeMessage';
import React from 'react';

// Nextjs ISR caching strategy
export const revalidate = false;

export default function page(){
    return (
    // <div className="min-h-screen flex items-center justify-center bg-[url('/bgpattern.svg')] bg-repeat bg-[length:65px] opacity-80 rounded-2xl p-10">
     
    // </div>
    <div className="relative min-h-screen flex items-start justify-center rounded-2xl p-10">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/bgpattern.svg')] bg-repeat bg-[length:65px] opacity-80"></div>

        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_70%,white_100%)]"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-16 py-10">
            {/* Welcome part */}
            <div className="flex flex-col items-center justify-center">
                <WelcomeMessage />
            </div>

            {/* pageButton part */}
            <div className="flex flex-col items-center justify-center">
                <PageButtons />
            </div>

            {/* Social part */}
            <div className="flex flex-col items-center justify-center">
                <Socials />
            </div>

            {/* Social part */}
        </div>
        </div>
    );
};

// Nextjs dynamic metadata
export function generateMetadata() {
    return {
        title: `Marketing Page`,
        description: `Marketing Page`,
        icons: {
            icon: `/favicon.svg`,
        },
    };
}
