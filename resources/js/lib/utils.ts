import { clsx, type ClassValue } from 'clsx';

import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Returns a string with the first letter capitalized
 * @param string The string to capitalize
 * @returns The capitalized string
 */
export function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Formats a given date string or Date object to a human-readable date string
 * in the format "DD.MM.YYYY, HH:mm".
 * @param date Date string or Date object to format
 * @returns Formatted date string in German locale
 */
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
    // if (!image) {
    //     return ""; // Platzhalter, wenn kein Bild
    // }

    const baseUrl = import.meta.env.VITE_APP_URL ?? window.location.origin;

    return `${baseUrl.replace(/\/+$/, '')}/uploads/${folder}/${image?.replace(/^\/+/, '')}`;
}
