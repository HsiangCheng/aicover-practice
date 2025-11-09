"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function InputSection() {
    const [prompt, setPrompt] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleGenerate = async () => {
        if (!prompt.trim()) {
            toast.error("请输入描述文字");
            return;
        }

        setIsLoading(true);
        try {
            const response = await fetch('/api/gen-cover', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt }),
            });

            const result = await response.json();

            if (result.success) {
                toast.success("生成成功！");
                // 这里可以更新页面显示新生成的图片
                console.log('生成的封面:', result.data);
            } else {
                toast.error(result.error || "生成失败");
            }
        } catch (error) {
            console.error('生成失败:', error);
            toast.error("生成失败，请重试");
        } finally {
            setIsLoading(false);
        }
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
                                disabled={isLoading}
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