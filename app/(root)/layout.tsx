
import authOptions from "@/lib/AuthOptions";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

interface ProtectedRootLayoutProps {
    children: React.ReactNode;
}

export default async function ProtectedRoot({ children }: ProtectedRootLayoutProps) {
    console.log("authOptions:", authOptions);
    const session = await getServerSession(authOptions);

    if (!session?.user) {
        redirect('/signin');
    }

    return (
        <main>
            {children}
        </main>
    );
}
