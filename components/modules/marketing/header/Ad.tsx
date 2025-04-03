'use client';

import Container from '@/components/customs/Container';
import { cn } from '@/lib/utils';
import React from 'react';

export default function Ad({className}:{className?:string}){
    return (
        <div className={cn('bg-gradient-to-r from-pink-700 to-blue-500 lg:h-[31.5px] text-center', className)}>
            <Container className="py-1">
                <div className="flex justify-center text-white ">
                   <p>
                    Introducing <strong className="mx-2">Next E Commerce, </strong>
                    A Full Multi-Vendor E-Commerce Platform for selling products online
                   </p>
                </div>
            </Container>
        </div>
    );
};