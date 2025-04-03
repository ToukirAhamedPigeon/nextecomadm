import React from 'react';

// Nextjs ISR caching strategy
export const revalidate = false;

export default function page(){
    return (
        <div>
            <h1>Sellers Dashboard</h1>
        </div>
    );
};

// Nextjs dynamic metadata
export function generateMetadata() {
    return {
        title: `Sellers Dashboard`,
        description: `Sellers Dashboard`,
        icons: {
            icon: `/favicon.svg`,
        },
    };
}
