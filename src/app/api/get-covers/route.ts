import { NextRequest, NextResponse } from "next/server";
import { getCovers } from "@/models/cover";

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get("page") || "1");
        const limit = parseInt(searchParams.get("limit") || "20");

        const covers = await getCovers(page, limit);

        return NextResponse.json({
            success: true,
            data: covers,
            pagination: {
                page,
                limit,
                total: covers.length,
            },
        });

    } catch (error) {
        console.error("获取封面失败:", error);
        return NextResponse.json(
            { error: "获取失败，请重试" },
            { status: 500 }
        );
    }
}