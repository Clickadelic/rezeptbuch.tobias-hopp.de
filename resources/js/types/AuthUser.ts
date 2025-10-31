/**
 * Basis-Benutzerobjekt für Auth
 */
export default interface AuthUser {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    biotext?: string;
    website_url?: string;
    rank: string;
    roles: string[];
    recipes_count: number;
    comments_count: number;
    favorites_count: number;
    permissions: string[];
    email_verified_at: string | null;
}
