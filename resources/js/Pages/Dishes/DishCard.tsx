import {  usePage } from '@inertiajs/react';


export default function DishCard() {
    const user = usePage().props.auth.user;
    return <div>DishCard</div>
}