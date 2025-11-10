import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: NextRequest) {
    try {
        console.log("API被调用");

        const { prompt } = await request.json();

        console.log("收到prompt:", prompt);

        if (!prompt) {
            return NextResponse.json(
                { error: '请输入描述文字' },
                { status: 400 }
            );
        }

        // 模拟AI生成过程
        const mockResult = {
            id: Date.now().toString(),
            img_url: 'https://picsum.photos/1024/1792?random=' + Date.now(),
            img_description: prompt,
            status: 1,
            created_at: new Date().toISOString(),
            uuid: `cover_${Date.now()}`,
        };

        // 模拟处理时间
        await new Promise(resolve => setTimeout(resolve, 1000));

        return NextResponse.json({
            success: true,
            data: mockResult
        });

    } catch (error) {
        console.error('生成失败:', error);
        return NextResponse.json(
            { error: '生成失败，请重试' },
            { status: 500 }
        );
    }
}