"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";

export default function ({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-screen min-h-screen">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}