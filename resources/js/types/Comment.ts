import AuthUser from "./AuthUser";

export type Comment = {
    id: number;
    content: string;
    parent_id?: number | null;
    user?: AuthUser;        // unbedingt optional markieren, falls manchmal anonym
    replies?: Comment[];
    created_at: string;
    updated_at: string;
}