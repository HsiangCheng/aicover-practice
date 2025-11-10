"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useAppContext } from "@/contexts/AppContext";

export default function InputSection() {
    const [prompt, setPrompt] = useState("");
    const [loading, setLoading] = useState(false);
    const { addGeneratedCover } = useAppContext();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!prompt.trim()) {
            toast.error("请输入描述文字");
            return;
        }

        setLoading(true);
        try {
            console.log('提交的prompt:', prompt);
            const response = await fetch('/api/gen-cover', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt }),
            });
            console.log('API响应状态:', response.status);

            const result = await response.json();
            console.log('API返回结果:', result);

            if (result.success) {
                toast.success("生成成功！");
                // 这里可以更新页面显示新生成的图片
                console.log('生成的封面:', result.data);
                addGeneratedCover(result.data);
                setPrompt("");
            } else {
                toast.error(result.error || "生成失败");
            }
        } catch (error) {
            console.error('生成失败:', error);
            toast.error("生成失败，请重试");
        } finally {
            setLoading(false);
        }
    };


    return (
      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="prompt" className="block text-sm font-medium mb-2">
                  描述你想要的红包封面
                </label>
                <textarea
                  id="prompt"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="例如：中国风新年红包，金色祥云图案，红色背景..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500
  focus:border-transparent resize-none"
                  rows={4}
                  disabled={loading}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors 
  disabled:opacity-50"
                disabled={!prompt.trim() || loading}
              >
                {loading ? "生成中..." : "生成红包封面"}
              </button>
            </form>
          </div>
        </div>
      </section>
    );
}