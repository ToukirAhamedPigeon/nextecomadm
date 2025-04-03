'use client';

import { Button } from '@/components/ui/button';
import { MoveLeft } from 'lucide-react';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Layout({children}: {children: React.ReactNode}){
    const router = useRouter();
    return (
        <div className='h-screen'>
            <div className="absolute top-10 left-10 flex items-center gap-4 group">
                <Button onClick={() => router.back()} variant='outline' size='icon' className='text-xl text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300 border-primary-500'>
                    <MoveLeft className='!h-5 !w-5' />
                </Button>
            </div>
            {children}
        </div>
    );
};