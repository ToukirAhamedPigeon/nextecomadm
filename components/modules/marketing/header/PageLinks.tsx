'use client';

import React from 'react';
import Link from 'next/link';
export default function PageLinks(){
    return (
        <div className="flex gap-6 text-slate-700 text-sm">
            <Link href="/">Docs</Link>
            <Link href="/">Pricing</Link>
        </div>
    );
};