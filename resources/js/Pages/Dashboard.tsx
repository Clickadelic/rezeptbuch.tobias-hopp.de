import FullWidthLayout from '@/Layouts/FullWidthLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
  return (
    <>
      <Head title="Willkommen" />
      <FullWidthLayout title="Willkommen">
        <h1>Dashboard</h1>
      </FullWidthLayout>
    </>
  );
}
