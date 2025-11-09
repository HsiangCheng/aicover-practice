import "@/app/globals.css";
import { Toaster } from "sonner";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: '我的AI红包封面练习',
    description: 'AI红包封面生成器练习项目',
};

export default function RootLayout(
    {
        children
    }: Readonly<{
        children: React.ReactNode
    }>) {
    return (
        <html lang="zh-CN">
            <body className={inter.className}>
                <Toaster position="top-center" richColors />
                {children}
            </body>
        </html>
    );
}