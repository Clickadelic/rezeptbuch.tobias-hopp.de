// resources/js/components/__tests__/forms/IngredientForm.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import IngredientForm from '@/components/forms/IngredientForm';
import { vi } from 'vitest';

// Mock für useForm von Inertia
vi.mock('@inertiajs/react', () => ({
    useForm: (initialData: any) => {
        let data = { ...initialData };
        return {
            data,
            setData: (key: string, value: any) => {
                data[key] = value;
            },
            post: vi.fn(),
            put: vi.fn(),
            processing: false,
            errors: {},
            reset: vi.fn(),
        };
    },
}));

describe('IngredientForm', () => {
    test('rendert das Formular für Create', async () => {
        render(<IngredientForm />);

        // Input-Field für Name prüfen
        const nameInput = screen.getByPlaceholderText('z.B. Kartoffeln');
        expect(nameInput).toBeInTheDocument();

        // Button zeigt "Hinzufügen"
        const submitButton = screen.getByRole('button', { name: /hinzufügen/i });
        expect(submitButton).toBeInTheDocument();

        // Eingabe simulieren
        await userEvent.type(nameInput, 'Tomaten');
        expect((nameInput as HTMLInputElement).value).toBe('Tomaten');
    });

    test('rendert das Formular für Edit', () => {
        const ingredient = { id: 1, name: 'Kartoffeln' };
        render(<IngredientForm ingredient={ingredient} />);

        // Button zeigt "Bearbeiten"
        const submitButton = screen.getByRole('button', { name: /bearbeiten/i });
        expect(submitButton).toBeInTheDocument();

        // Input-Feld enthält den bestehenden Namen
        const nameInput = screen.getByDisplayValue('Kartoffeln');
        expect(nameInput).toBeInTheDocument();
    });
});
