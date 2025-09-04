// types.ts
import { Difficulty } from './Difficulty';

export type Cocktail = {
    id?: string;
    name: string;
    slug?: string;
    punchline?: string;
    description?: string;
    rating?: number;
    preparation_time?: number;
    difficulty?: Difficulty;
    user_id?: string;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
};