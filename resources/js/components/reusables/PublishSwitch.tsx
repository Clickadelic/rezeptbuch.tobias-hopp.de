import { Switch } from '@/components/ui/switch';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import { Recipe } from '@/types/Recipe';

interface PublishSwitchProps {
    recipe: Recipe;
    status: 'draft' | 'published';
}

export default function PublishSwitch({ recipe, status }: PublishSwitchProps) {
    const [checked, setChecked] = useState(status === 'published');
    const [loading, setLoading] = useState(false);

    const handleChange = async (newChecked: boolean) => {
        if (loading) return;

        setChecked(newChecked); // Switch sofort animieren
        setLoading(true);

        try {
            await axios.post(route('recipes.togglePublish', recipe), {
                status: newChecked ? 'published' : 'draft',
            });
            toast.success(`Rezept ${newChecked ? 'veröffentlicht' : 'auf Entwurf gesetzt'}!`);
        } catch (error) {
            console.error(error);
            setChecked(!newChecked); // revert bei Fehler
            toast.error('Fehler beim Aktualisieren des Status!');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Switch
            className="hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            checked={checked}
            onCheckedChange={handleChange} // 👈 Wichtig! Nicht onChange
            disabled={loading}
            title={checked ? 'Veröffentlicht' : 'Entwurf'}
        />
    );
}
