'use client';

import * as React from 'react';
import { ChevronsUpDown, Check } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

import type { Ingredient } from '@/types/Ingredient';

interface IngredientComboBoxProps {
    options: Ingredient[];
    value: string; // can be an existing ingredient id (uuid) or a free-text name
    onChange: (value: string) => void;
    placeholder?: string;
    triggerClassName?: string;
}

export function IngredientComboBox({
    options,
    value,
    onChange,
    placeholder = 'Zutat auswählen oder neu anlegen',
    triggerClassName,
}: IngredientComboBoxProps) {
    const [open, setOpen] = React.useState(false);
    const [inputValue, setInputValue] = React.useState('');

    const selected = React.useMemo(
        () => options.find((o) => o.id === value) ?? null,
        [options, value],
    );

    const displayLabel = selected ? selected.name : value || placeholder;

    const existsByName = (name: string) =>
        options.some((o) => o.name.trim().toLowerCase() === name.trim().toLowerCase());

    const shouldOfferCreate = inputValue.trim().length > 0 && !existsByName(inputValue);

    function handleSelect(currentValue: string) {
        // Encoded values are of the form:
        //   id:<uuid> <name>
        //   create:<typed-name>
        if (currentValue.startsWith('id:')) {
            const match = currentValue.match(/^id:([^\s]+)\s?.*$/);
            const id = match?.[1] ?? '';
            if (id) onChange(id);
        } else if (currentValue.startsWith('create:')) {
            const name = currentValue.slice('create:'.length).trim();
            if (name) onChange(name);
        }
        setOpen(false);
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className={cn('w-64 justify-between', triggerClassName)}
                >
                    <span className={cn(!selected && !value && 'text-muted-foreground')}>
                        {displayLabel}
                    </span>
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0">
                <Command>
                    <CommandInput
                        placeholder="Zutat suchen oder neu anlegen"
                        value={inputValue}
                        onValueChange={setInputValue}
                        className="my-4 focus:border-primary focus:ring-primary"
                    />
                    <CommandList>
                        {shouldOfferCreate && (
                            <CommandItem
                                key={`create-${inputValue}`}
                                value={`create:${inputValue}`}
                                onSelect={handleSelect}
                            >
                                Neu erstellen: "{inputValue}"
                            </CommandItem>
                        )}
                        <CommandEmpty>Keine Zutat gefunden.</CommandEmpty>
                        <CommandGroup>
                            {options.map((opt) => {
                                const encoded = `id:${opt.id} ${opt.name}`;
                                const isSelected = selected?.id === opt.id;
                                return (
                                    <CommandItem
                                        key={opt.id}
                                        value={encoded}
                                        onSelect={handleSelect}
                                    >
                                        <Check
                                            className={cn(
                                                'mr-2 h-4 w-4',
                                                isSelected ? 'opacity-100' : 'opacity-0',
                                            )}
                                        />
                                        {opt.name}
                                    </CommandItem>
                                );
                            })}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
