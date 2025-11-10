"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { AppContextProvider } from "@/contexts/AppContext";

export default function ({ children }: { children: React.ReactNode }) {
    return (
        <AppContextProvider>
            <div className="w-screen h-screen">
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
        </AppContextProvider>
    );
}