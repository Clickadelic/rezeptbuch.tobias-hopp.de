import { clsx, type ClassValue } from 'clsx';

import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function toHumanDate(date: Date | string) {
    return new Intl.DateTimeFormat('de-DE', { dateStyle: 'medium', timeStyle: 'short' }).format(
        new Date(date),
    );
}

/**
 * Gibt den vollständigen URL-Pfad zu einem Bild zurück.
 * @param folder Name des Upload-Ordners, z.B. "dishes", "cocktails"
 * @param image Dateiname des Bildes
 * @returns Vollständige URL oder Fallback-Pfad
 */
export function assetPath(folder: string, image?: string | null): string {
    if (!image) {
        return "/uploads/dishes/Placeholder-Dish.png"; // Platzhalter, wenn kein Bild
    }

    const baseUrl = import.meta.env.VITE_APP_URL ?? window.location.origin;

    return `${baseUrl.replace(/\/+$/, "")}/uploads/${folder}/${image.replace(/^\/+/, "")}`;
}
