import NoSidebarsLayout from '@/layouts/NoSidebarsLayout';
import IngredientDirectory from '@/components/template-views/IngredientsDirectory';
import Seperator from '@/components/reusables/Seperator';

import srcUrl from "@images/svg/Notebook-bro.svg";

export default function IngredientsIndex() {
    return (
        <NoSidebarsLayout title="Zutaten">
            <div className="grid grid-cols-1 sm:grid-cols-3">
                <div className="col-span-1 flex justify-center items-center">
                    <img src={srcUrl} className="size-48" alt="Chef Tobias" />
                </div>
                <div className="w-full col-span-4 col-start-2">
                    <p>Die Zutaten werden global angelegt und verwaltet. Jeder Benutzer kann seine Zutaten hinzufügen und Bearbeiten. Andere Nutzer können diese Zutaten dann wiederum mitverwenden und in Ihre Rezepte einfügen.</p>
                    <br />
                    <p>Dadurch wird mit der Zeit der Pool an Zutaten größer, die Zeit um Zutaten einzugeben kleiner.</p>
                    <br />
                    <p>Sofern die Zutat Dir gehört, kannst Du sie hier auch bearbeiten.</p>
                    <br />
                    <p>Du kannst diesen Schritt auch überspringen und die Zutaten erst während der Rezepterstellung hinzufügen.</p>
                </div>
            </div>
            <Seperator style="salad" />
            <IngredientDirectory />
        </NoSidebarsLayout>
    );
}
