import { useForm } from '@inertiajs/react';

export default function DishCreate() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        description: '',
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        post('/gerichte'); // Route, die dein Controller erwartet
    }

    return (
        <form onSubmit={submit}>
            <div>
                <label>Name:</label>
                <input
                value={data.name}
                onChange={e => setData('name', e.target.value)}
                type="text"
                />
                {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
            </div>

            <div>
                <label>Beschreibung:</label>
                <textarea
                value={data.description}
                onChange={e => setData('description', e.target.value)}
                />
                {errors.description && <div style={{ color: 'red' }}>{errors.description}</div>}
            </div>

            <button type="submit" disabled={processing}>Speichern</button>
        </form>
    );
}
