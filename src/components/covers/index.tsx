"use client";

import Image from "next/image";
import { Cover } from "@/types";
import { useAppContext } from "@/contexts/AppContext";
import { mockCovers } from "@/data/mock-covers";
import { useEffect, useState } from "react";

interface CoversProps {
    cate: string;
    showTab: boolean;
}

export default function Covers({ cate, showTab }: CoversProps) {
    const { generatedCovers } = useAppContext();
    const [apiCovers, setApiCovers] = useState<Cover[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCovers = async () => {
            try {
                const response = await fetch("/api/get-covers");
                const result = await response.json();

                if (result.success) {
                    setApiCovers(result.data);
                }
            } catch (error) {
                console.error("获取封面失败:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCovers();
    }, []);


    // 显示生成的封面 + 模拟封面
    const allCovers = cate === "generated" ? generatedCovers : [...generatedCovers, ...mockCovers];

    if (!allCovers || allCovers.length === 0) {
        return (
            <section className="w-full py-12">
                <div className="container px-4 md:px-6">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold mb-4">
                            {cate === "latest" ? "最新作品" : "推荐作品"}
                        </h2>
                        <p className="text-gray-500">暂无作品展示</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="w-full py-12">
            <div className="container px-4 md:px-6">
                {showTab && (
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-center mb-6">
                            {generatedCovers.length > 0 ? "我的作品" : "最新作品"}
                        </h2>
                    </div>
                )}

                {loading ? (
                    <div className="text-center py-12">
                        <p className="text-gray-500">加载中...</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {allCovers.map((cover) => (
                            <div
                                key={cover.uuid || cover.id}
                                className="group relative overflow-hidden rounded-lg border hover:shadow-lg transition-shadow"
                            >
                                <div className="aspect-[9/16] bg-gray-100">
                                    <Image
                                        src={cover.img_url}
                                        alt={cover.img_description}
                                        width="280"
                                        height="420"
                                        className="object-cover transition-transform group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-4">
                                    <p className="text-sm text-gray-600 line-clamp-2">
                                        {cover.img_description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {!loading && allCovers.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500">暂无作品，快来生成你的第一个红包封面吧！</p>
                    </div>
                )}
            </div>
        </section>
    );
}