import AuthUser from './AuthUser';

export type Comment = {
    id: number;
    recipe_id: string;
    parent_id?: number | null;
    content: string;
    user?: AuthUser; // unbedingt optional markieren, falls manchmal anonym
    replies?: Comment[];
    created_at: string;
    updated_at: string;
};
