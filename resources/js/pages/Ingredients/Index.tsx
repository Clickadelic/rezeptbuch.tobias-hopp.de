import NoSidebarsLayout from '@/layouts/NoSidebarsLayout';
import IngredientDirectory from '@/components/template-views/IngredientsDirectory';
import Seperator from '@/components/reusables/Seperator';

import srcUrl from "@images/svg/Hamburger-bro.svg";

export default function IngredientsIndex() {
    return (
        <NoSidebarsLayout title="Zutaten">
            <div className="grid grid-cols-1 sm:grid-cols-3">
                <div className="col-span-1 flex justify-center items-center">
                    <img src={srcUrl} className="size-48" alt="Chef Tobias" />
                </div>
                <div className="w-full col-span-4 col-start-2">
                    <p>Gute Zutaten sind die Grundlage für ein gesundes und leckeres Essen. Das Gleiche gilt natürlich auch für Getränke aller Art, frei nach dem Motto:</p>
                    <br />
                    <p className="italic">"Es ist genau so wichtig, was in Deinen Mund rein geht, wie das was raus kommt."</p>
                    <br />
                    <p>In den Rezepten sind folgende Zutaten enthalten:</p>
                </div>
            </div>
            <Seperator style="salad" />
            <IngredientDirectory />
        </NoSidebarsLayout>
    );
}
