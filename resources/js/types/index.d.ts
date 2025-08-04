import { Dish } from './Dish';

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export interface PageProps {
  dishes?: Dish[];
  canLogin?: boolean;
  canRegister?: boolean;
  // Weitere globale Props
  auth?: {
    user?: {
      id: number;
      name: string;
      email: string;
    };
  };
}
export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
};
