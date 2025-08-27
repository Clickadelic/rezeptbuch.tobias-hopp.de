// types.ts
export default interface Dish {
  id: string; // oder number, je nachdem
  name: string;
  description?: string;
  rating?: number;
  image?: string; // falls dynamische Bilder
}
