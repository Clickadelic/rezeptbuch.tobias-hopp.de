import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import { Button } from '@/Components/ui/button';
import TextInput from '@/Components/TextInput';
import SidebarLeftLayout from '@/Layouts/SidebarLeftLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import Dish from '@/types/Dish';

interface DishFormProps {
  dish: Dish;
}

export default function DishForm() {
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
        <InputLabel htmlFor="name" value="name" />

        <TextInput
          id="name"
          type="name"
          name="name"
          value={data.name}
          className="mt-1 block w-full"
          autoComplete="username"
          placeholder="E-Mail Adresse"
          isFocused={true}
          onChange={(e) => setData('name', e.target.value)}
        />

        <InputError message={errors.name} className="mt-2" />
      </div>

      <div className="my-4 flex items-center justify-end">
        <Button variant="primary" size="lg" className="w-full" disabled={processing}>
          Neues Gericht
        </Button>
      </div>
    </form>
  );
}
