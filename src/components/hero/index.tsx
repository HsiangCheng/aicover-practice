import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Hero() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                            AI 红包封面生成器
                        </h1>
                        <p className="max-w-[600px] text-gray-500 md:text-xl">
                            利用 AI 技术生成高清精美的微信红包封面图片，让你的红包与众不同
                        </p>
                    </div>
                    <div className="space-x-4">
                        <button className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-white 
  hover:bg-gray-800">
                            开始创作
                            <ArrowRightIcon className="ml-2 h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}