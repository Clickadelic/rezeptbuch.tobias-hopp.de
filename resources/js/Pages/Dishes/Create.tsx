import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import { Button } from '@/Components/ui/button';
import TextInput from '@/Components/TextInput';
import SidebarLeftLayout from '@/Layouts/SidebarLeftLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler, useEffect } from 'react';
import DishesSidebar from '@/Components/sidebars/DishesSidebar';
import { toast } from 'sonner';

// ...imports bleiben
export default function CreateDish() {
  const { flash } = usePage().props as { flash: { success?: string } };

  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    description: '',
  });

  useEffect(() => {
    if (flash?.success) toast.success(flash.success);
  }, [flash]);

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    post(route('dishes.store'), {
      onSuccess: () => reset(),
    });
  };

  return (
    <SidebarLeftLayout title="Neues Gericht" sidebar={<DishesSidebar />}>
      <Head title="Neues Gericht" />
      <form onSubmit={submit} className="space-y-4">
        {/* Titel */}
        <div>
          <InputLabel htmlFor="name" value="Titel" />
          <TextInput
            id="name"
            type="text"
            value={data.name}
            onChange={(e) => setData('name', e.target.value)}
            className="mt-1 block w-full"
            placeholder="Reispfanne mit Gemüse"
            autoFocus
          />
          <InputError message={errors.name} className="mt-2" />
        </div>

        {/* Beschreibung */}
        <div>
          <InputLabel htmlFor="description" value="Beschreibung" />
          <textarea
            id="description"
            value={data.description}
            onChange={(e) => setData('description', e.target.value)}
            className="mt-1 block w-full rounded border border-slate-400 focus:border-emerald-700 focus:ring-emerald-700 py-3 px-4"
            rows={4}
            placeholder="Zubereitung und Zutaten..."
          />
          <InputError message={errors.description} className="mt-2" />
        </div>

        {/* Submit */}
        <div className="flex justify-end">
          <Button
            // shadcn/ui kennt typischerweise variants wie "default", "secondary", "destructive"
            // Falls du "primary" nicht erweitert hast, nimm "default" oder lass variant weg.
            type="submit"
            className="w-full"
            disabled={processing}
          >
            Gericht erstellen
          </Button>
        </div>
      </form>
    </SidebarLeftLayout>
  );
}
