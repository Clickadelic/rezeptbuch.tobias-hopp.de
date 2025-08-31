// types.ts
import { Difficulty } from './Difficulty';

export type Dish = {
    id?: string;
    name: string;
    slug?: string;
    punchline?: string;
    description?: string;
    image?: string | null;
    rating?: number;
    preparation_time?: number;
    difficulty?: Difficulty;
    user_id?: string;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
}
