// types.ts
export default interface Dish {
    id: string; // UUIDV4
    name: string; // Ofengemüse mit Quark
    subtitle: string; // Vegetarisch und gesund
    description?: string; // gebackene Ofenkartoffeln und Gemüse
    rating?: number;
    image?: string; // falls dynamische Bilder
}
