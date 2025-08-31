export default interface Ingredient {
    id: string;
    name: string;
    amount: number;
    unit: string;
    user_id?: string;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
}