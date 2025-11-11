import { mockCovers } from "@/data/mock-covers";
import type { Cover } from "@/types";

let mockCoversDB: Cover[] = mockCovers;

export async function getCovers(page: number = 1, limit: number = 20): Promise<Cover[]> {
    return mockCoversDB.slice((page - 1) * limit, page * limit);
}

export async function saveCover(cover: Omit<Cover, "id" | "created_at">): Promise<Cover> {
    const newCover: Cover = {
        ...cover,
        id: Date.now(),
        created_at: new Date().toISOString(),
    };
    mockCoversDB.unshift(newCover);
    return newCover;
}

export async function getCoverByUUID(uuid: string): Promise<Cover | null> {
    return mockCoversDB.find(cover => cover.uuid === uuid) || null;
}