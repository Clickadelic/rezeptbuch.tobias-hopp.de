import { usePage } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import { BsChevronRight } from "react-icons/bs";
import Dish from '@/types/Dish';

interface DishCardProps {
    dish: Dish;
}

export default function DishCard({ dish }: DishCardProps) {
    const user = usePage().props.auth?.user;

    return (
        <li className="relative bg-white rounded shadow-lg overflow-hidden">
            <Link href={route('dishes.show', dish.id)} className="relative group block">
                {/* Bild */}
                <img
                    src={dish.image ?? "images/Hauptgerichte-416x234.jpg"}
                    className="w-full h-auto object-cover"
                    alt={dish.name}
                />

                {/* Schwarzes Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-opacity duration-500"></div>

                {/* Text */}
                <h3 className="absolute bottom-2 left-2 text-white text-xl z-10">
                    {dish.name}
                </h3>
            </Link>

            <div className="p-3 text-slate-800 text-base">
                {dish.description && <p className="mb-2">{dish.description}</p>}
                {dish.rating !== undefined && <p className="mb-2">Rating: {dish.rating}</p>}
                <Link
                    href={route('dishes.show', dish.id)}
                    className="inline-flex items-center text-emerald-700 hover:text-emerald-800 gap-1"
                >
                    Details <BsChevronRight />
                </Link>
            </div>
        </li>
    );
}
