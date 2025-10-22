export type Comment = {
    id: number;
    user_id: number;
    recipe_id: number;
    parent_id: number | null;
    content: string;
    created_at: string;
    updated_at: string;
}