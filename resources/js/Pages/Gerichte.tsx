import FullWidthLayout from '@/layouts/FullWidthLayout';
import { Head } from '@inertiajs/react';

import DummyCard from '@/components/DummyCard';

const recipeDummys = [
    {
        "id": 1,
        "name": "Dummy Card 1",
        "description": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
        "image": "https://via.placeholder.com/150"
    },
    {
        "id": 2,
        "name": "Dummy Card 2",
        "description": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
        "image": "https://via.placeholder.com/150"
    },
    {
        "id": 3,
        "name": "Dummy Card 3",
        "description": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
        "image": "https://via.placeholder.com/150"
    }
]


export default function Gerichte() {
    return (
        <FullWidthLayout>
            <Head title="Gerichte" />
                <h2 className="text-2xl my-3">Gerichte</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {recipeDummys.map((dummy) => (
                        <DummyCard key={dummy.id} {...dummy} />
                    ))}
                </div>
        </FullWidthLayout>
    );
}