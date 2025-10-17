export default interface Pagination<T> {
  data: T[];
  current_page: number;
  last_page: number;
  per_page: number;
  links: {
    url: string | null;
    label: string;
    active: boolean;
  }[];
}