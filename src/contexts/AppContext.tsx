"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Cover } from "@/types";

interface AppContextType {
    generatedCovers: Cover[];
    addGeneratedCover: (cover: Cover) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppContextProvider({ children }: { children: ReactNode }) {
    const [generatedCovers, setGeneratedCovers] = useState<Cover[]>([]);

    const addGeneratedCover = (cover: Cover) => {
        setGeneratedCovers(prev => [cover, ...prev]);
    };

    return (
        <AppContext.Provider value={{ generatedCovers, addGeneratedCover }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error("useAppContext must be used within AppContextProvider");
    }
    return context;
}