'use client';

import React from 'react';
import Logo from '@/components/customs/Logo';
import PageLinks from './PageLinks';
import SocialIcons from './SocialIcons';
import DarkModeToggle from './DarkModeToggle';
import { cn } from '@/lib/utils';

export default function Main({className}:{className?:string}    ){
    return (
        <div className={cn("flex justify-between items-center lg:w-[1200px] mx-auto px-4 py-4 ", className)}>
            {/* LeftPart */}
            <div className="flex items-center gap-32">
                <Logo/>
                <PageLinks/>
            </div>
            
            {/* RightPart */}
            <div className="flex items-center gap-12">
                <SocialIcons/>
                <DarkModeToggle/>
            </div>
            
        </div>
    );
};