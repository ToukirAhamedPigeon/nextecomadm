import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Logo(){
    return (
        <div>
            <Link href="/">
                <Image src="/nextecombg.svg" alt="logo" width={80} height={80} />
            </Link>
        </div>
    );
};