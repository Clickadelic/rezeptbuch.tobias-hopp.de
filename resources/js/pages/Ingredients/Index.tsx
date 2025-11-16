import NoSidebarsLayout from '@/layouts/NoSidebarsLayout';
import IngredientDirectory from '@/components/template-views/IngredientsDirectory';
import imgUrl from "@images/svg/Hamburger-bro.svg";

/**
 * A page that displays all the ingredients of the recipe book.
 * 
 * It consists of a grid that displays an image of a hamburger, a paragraph explaining the importance of good ingredients, and a list of all the ingredients.
 * 
 * The page is wrapped in a NoSidebarsLayout, which means that there is no sidebar on this page.
 */
export default function IngredientsIndex() {
    return (
        <NoSidebarsLayout title="Zutaten" description="Hier findest Du alle Zutaten des Rezeptbuchs.">
            <div className="grid grid-cols-1 sm:grid-cols-3 mb-5">
                <div className="sm:col-span-1 flex justify-center items-center">
                    <img src={imgUrl} className="size-36 mb-8 sm:mb-6" alt="Zutatenillustration" />
                </div>
                <div className="w-full col-span-1 sm:col-span-4 sm:col-start-2">
                    <p>Gute Zutaten sind die Grundlage für ein gesundes und leckeres Essen. Das Gleiche gilt natürlich auch für Getränke aller Art, frei nach dem Motto:</p>
                    <br />
                    <p className="italic">"Es ist genau so wichtig, was in Deinen Mund rein geht, wie das was raus kommt."</p>
                    <br />
                    <p>In den Rezepten sind folgende Zutaten enthalten:</p>
                </div>
            </div>
            <IngredientDirectory />
            
        </NoSidebarsLayout>
    );
}
