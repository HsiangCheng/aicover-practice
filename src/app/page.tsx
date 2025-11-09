import Hero from "@/components/hero";
import InputSection from "@/components/input";
import Covers from "@/components/covers";
import { mockCovers } from "@/data/mock-covers";


export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Hero />
            <InputSection />
            <Covers covers={mockCovers} cate="latest" />
        </div>
    );
}