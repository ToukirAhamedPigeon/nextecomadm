'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Socials(){
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-center text-[10px]">A lot of users are using Next E Commerce to grow their business, join the community.</p>
            <div className="relative flex flex-row items-center justify-center">
                <Link href="" target="_blank">
                    <Image src="/socials/microsoft.png" alt="Microsoft" className="rounded-full opacity-80" width={24} height={24} />
                </Link>
                <Link href="" target="_blank">
                    <Image src="/socials/amazon.png" alt="Amazon" className="rounded-full opacity-80" width={24} height={24} />
                </Link>
                <Link href="" target="_blank">
                    <Image src="/socials/slack.png" alt="Slack" className="rounded-full opacity-80" width={32} height={32} />
                </Link>
                <Link href="" target="_blank">
                    <Image src="/socials/google.png" alt="Google" className="rounded-full opacity-80" width={24} height={24} />
                </Link>
                <Link href="" target="_blank">
                    <Image src="/socials/meta.png" alt="Meta" className="rounded-full opacity-80" width={24} height={24} />
                </Link>
                <Link href="" target="_blank">
                    <Image src="/socials/LinkedIn.png" alt="Linkedin" className="rounded-full opacity-80" width={24} height={24} />
                </Link>
            </div>
        </div>
    );
};