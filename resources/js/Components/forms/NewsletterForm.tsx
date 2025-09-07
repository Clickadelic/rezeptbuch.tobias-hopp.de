import { useForm, Link } from '@inertiajs/react';
import { useState } from 'react';

export default function NewsletterForm() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
    })
    return (
        <form className="flex flex-col justify-between items-center gap-2">
            
            <input
                type="text"
                placeholder="Name"
                className="px-2 py-1 rounded w-full bg-slate-200 text-slate-100"
            />
            <input
                type="email"
                placeholder="Email"
                className="px-2 py-1 rounded w-full bg-slate-200 text-slate-100"
            />
            <button
                type="submit"
                className="px-2 py-1 rounded bg-primary text-slate-100 hover:bg-primary"
            >
                Subscribe
            </button>
            
        </form>
    );
}