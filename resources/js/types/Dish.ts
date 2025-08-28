// types.ts
export default interface Dish {
    id: string;
    name: string;
    punchline?: string;
    description?: string;
    image?: string;
    rating?: string;
    preparation_time?: string;
    difficulty?: string;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
}
