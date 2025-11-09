import Image from "next/image";

interface Cover {
    id: string;
    img_url: string;
    img_description: string;
}

export default function Covers({
    covers,
    cate = "latest"
}: {
    covers: Cover[],
    cate?: string
}) {
    if (!covers || covers.length === 0) {
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
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold">
                        {cate === "latest" ? "最新作品" : "推荐作品"}
                    </h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {covers.map((cover) => (
                        <div key={cover.id} className="group relative overflow-hidden rounded-lg">
                            <div className="aspect-[9/16] w-full overflow-hidden bg-gray-100">
                                <Image
                                    src={cover.img_url}
                                    alt={cover.img_description}
                                    width="280"
                                    height="420"
                                    className="object-cover transition-transform group-hover:scale-105"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}