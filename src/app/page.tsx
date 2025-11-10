import Hero from "@/components/hero";
import InputSection from "@/components/input";
import Covers from "@/components/covers";
import { mockCovers } from "@/data/mock-covers";
import { AppContextProvider } from "@/contexts/AppContext";


export default function Home() {
    return (
        <AppContextProvider>
            <div className="min-h-screen bg-gray-50">
                <Hero />
                <InputSection />
                <Covers cate="latest" showTab={true} />
            </div>
        </AppContextProvider>
    );
}