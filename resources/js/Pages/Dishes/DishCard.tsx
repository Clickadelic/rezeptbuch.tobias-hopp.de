import { usePage } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import Dish from '@/types/Dish';
import { Card, CardContent, CardFooter, CardHeader } from '@/Components/ui/card';
import { GoClock } from "react-icons/go";
import { VscSymbolEvent } from "react-icons/vsc";

interface DishCardProps {
    dish: Dish;
}

export default function DemoCard({ dish }: DishCardProps) {
    const user = usePage().props.auth?.user;

    return (
        <Link href={route('dishes.show', dish.id)} className="group block mb-3">
            <Card className="relative overflow-hidden">
                {/* Bild mit Scale Transition */}
                <CardHeader className="h-96 overflow-hidden p-0 rounded-xl">
                    <div className="w-full h-full bg-[url('../../images/Hauptgerichte-416x234.jpg')] bg-cover bg-center transition-transform duration-200 ease-in group-hover:scale-103" />
                </CardHeader>

                {/* Titel */}
                <CardContent className="p-2">
                    <h3 className="text-xl font-medium text-yellowtail transition-colors duration-500 ease-in-out group-hover:text-emerald-700">
                        {dish.name}
                    </h3>
                </CardContent>

                {/* Footer */}
                <CardFooter className="flex flex-row items-center justify-between space-x-2">
                    <div>
                        <GoClock className="inline-flex size-4 mr-2 text-emerald-700" />
                        <span className="text-sm">10 Min.</span>
                    </div>
                    <div>
                        <VscSymbolEvent className="inline-flex size-4 mr-2 text-emerald-700" />
                        <span className="text-sm">einfach</span>
                    </div>
                </CardFooter>
            </Card>
        </Link>
    );
}
