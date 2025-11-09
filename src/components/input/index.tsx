"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function InputSection() {
    const [prompt, setPrompt] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleGenerate = async () => {
        if (!prompt.trim()) return;

        setIsLoading(true);
        // 这里后续会调用AI生成API
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };

    return (
        <section className="w-full py-12">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-2xl">
                    <div className="space-y-4">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold">描述你想要的红包封面</h2>
                            <p className="text-gray-500">用文字告诉AI你想要的样式、元素、颜色等</p>
                        </div>
                        <div className="space-y-4">
                            <Textarea
                                placeholder="例如：中国风红色背景，金色花纹，带有福字的新年红包封面..."
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                className="min-h-[100px]"
                            />
                            <div className="flex justify-center">
                                <Button
                                    onClick={handleGenerate}
                                    disabled={isLoading || !prompt.trim()}
                                    className="px-8"
                                >
                                    {isLoading ? "生成中..." : "生成红包封面"}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}