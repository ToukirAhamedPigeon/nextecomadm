'use client';

import LongWButton from '@/components/customs/buttons/LongWButton';
import { CaretRight } from '@phosphor-icons/react';
import React from 'react';

export default function WelcomeMessage(){
    return (
        <div className="flex flex-col items-center justify-center gap-2">
            <LongWButton className="bg-slate-200 hover:bg-slate-100">
                <div className="flex flex-row justify-between w-[150px] items-center">
                    <span className="text-[8px] font-bold">Introducing &nbsp; Next E-Commerce</span>
                    <CaretRight weight="bold" className="!w-2 !h-2" />
                </div>
            </LongWButton>
            <h1 className="text-2xl font-bold tracking-wide [word-spacing:5px]">Launch your <span className="text-primary-500">online store</span> quickly</h1>
            <p className="text-[11px] text-slate-700 text-center">Power your business with Next.js! Simplify your online store, boost performance, and grow effortlessly with our all-in-one eCommerce platform. Fast, scalable, and SEO-friendly!</p>
        </div>
    );
};