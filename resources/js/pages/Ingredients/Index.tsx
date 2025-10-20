import NoSidebarsLayout from '@/layouts/NoSidebarsLayout';
import IngredientDirectory from '@/components/reusables/IngredientsDirectory';

export default function IngredientsIndex() {
    return (
        <NoSidebarsLayout title="Zutaten">
            <IngredientDirectory />
        </NoSidebarsLayout>
    );
}
