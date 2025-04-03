'use client';

import React, { useState } from 'react';
import { Moon, Sun } from "@phosphor-icons/react";
import { Button } from '@/components/ui/button';

export default function DarkModeToggle(){
    const [theme, setTheme] = useState('dark');
    return (
        <div>
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                {theme === 'dark' ? <Sun /> : <Moon />}
            </Button>
        </div>
    );
};