export type Media = {
  id: number;
  name: string;
  file_name: string;
  mime_type: string;
  path: string;
  url?: string;
  disk: string;
  collection?: string;
  size?: number;
  pivot?: {
    collection?: string;
    is_primary?: boolean;
    position?: number;
  };
};