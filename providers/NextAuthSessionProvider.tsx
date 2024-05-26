'use client';

import { SessionProvider } from "next-auth/react";
import NextAuth from 'next-auth';
import { ReactNode } from "react";

interface NextAuthSessionProviderProps {
    children: ReactNode;
}

export default function NextAuthSessionProvider({ children }: NextAuthSessionProviderProps) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
}