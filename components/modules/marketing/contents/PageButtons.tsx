'use client';

import { Button } from '@/components/ui/button';
import { ShareNetwork, Truck, Wallet } from '@phosphor-icons/react';
import {TabletSmartphoneIcon } from 'lucide-react';
import React from 'react';

export default function PageButtons(){
    return (
        <div className="flex flex-col justify-center items-center gap-2">
            {/* bigbuttons */}
            <div className="flex flex-row justify-center items-center gap-3">
                <Button className="bg-gray-900 text-white hover:bg-gray-600 rounded-xl">Dashboard</Button>
                <Button className="bg-gray-50 text-gray-900 hover:bg-gray-100 rounded-xl">See the demo</Button>
            </div>

            {/* iconbuttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:gap-4 gap-2 justify-center items-center w-[250px] lg:min-w-[550px]">
                <Button variant="ghost" size="icon" className="w-24">
                    <TabletSmartphoneIcon /> <span className="text-[9px]">Responsive</span>
                </Button>
                <Button variant="ghost" size="icon" className="w-24">
                    <Wallet /> <span className="text-[9px]">Integrated Payment</span>
                </Button>
                <Button variant="ghost" size="icon" className="w-24">
                    <Truck /> <span className="text-[9px]">Order Tracking</span>
                </Button>
                <Button variant="ghost" size="icon" className="w-24">
                    <ShareNetwork /> <span className="text-[9px]">Marketing - SEO Optimized</span>
                </Button>
                </div>
        </div>
    );
};