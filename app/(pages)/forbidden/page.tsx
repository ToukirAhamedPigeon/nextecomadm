'use client';
import { Button } from '@/components/ui/button';
import { MoveLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';


export default function Page(){
    const router = useRouter();
    return (
        <div className='flex h-screen w-screen items-center justify-center flex-col gap-4'>
            <h1 className='text-2xl font-bold text-danger-700'>Forbidden</h1>
            <p className='text-sm text-gray-500'>You are not authorized to access this page!!</p>
            <Button onClick={() => router.back()} variant='outline' className='mt-4 text-xl text-success-500 hover:bg-success-500 hover:text-white transition-all duration-300 border-success-500'>
                <MoveLeft className='!h-5 !w-5' />
                <span className='!text-sm'>Go back</span>
            </Button>
        </div>
    );
};


