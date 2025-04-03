
import React from 'react';
import Link from 'next/link';
import { YoutubeLogo, GithubLogo } from "@phosphor-icons/react";
export default function SocialIcons(){
    return (
        <div className="flex gap-4 text-slate-700">
            <Link href="/">
                <div className="flex items-center gap-2">
                    <YoutubeLogo /> <span className="text-sm ">Youtube</span>
                </div>
            </Link>
            <Link href="/">
                <div className="flex items-center gap-2">
                    <GithubLogo /> <span className="text-sm ">Github</span>
                </div>
            </Link>
        </div>
    );
};