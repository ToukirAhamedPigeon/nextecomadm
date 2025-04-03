import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React from 'react';

export default function LongWButton({className, children}: {className?: string, children: React.ReactNode}){
    return (
        <>
            <Button className={cn("h-[24px] rounded-full shadow-sm hover:shadow-md", className)}>
                    {children}
            </Button>
        </>
    );
};