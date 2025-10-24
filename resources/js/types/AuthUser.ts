/**
 * Basis-Benutzerobjekt für Auth
 */
export default interface AuthUser {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    roles: string[];
    permissions: string[];
    email_verified_at: string | null;
}
