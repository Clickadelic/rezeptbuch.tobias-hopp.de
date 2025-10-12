import { cn } from "@/lib/utils";

interface AlteringBlockProps {
    reverse?: boolean
    className?: string
}

export default function AlteringBlock({ reverse = false, className }: AlteringBlockProps) {
    return (
        <div className={cn("w-full flex gap-2 lg:gap-5 items-center justify-center", className ?? "" , reverse ? "flex-row-reverse" : "")}>
            <div className="w-1/2 grid grid-cols-2 gap-4 mt-8">
                <img className="w-full rounded-lg" src="asd" alt="office content 1" />
                <img className="mt-4 w-full lg:mt-10 rounded-lg" src="asd" alt="office content 2" />
            </div>
            <div className={cn("w-1/2 flex flex-col items-start justify-start")}>
                <h3 className="text-3xl mb-3">Für alle was dabei</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam explicabo exercitationem ad debitis optio dolorum necessitatibus adipisci eligendi excepturi blanditiis, quas nam vel omnis voluptate a libero nobis amet! Libero temporibus quae autem, aliquam ducimus molestiae velit, ab unde nesciunt officiis fugiat dolorum vero assumenda, ut error corporis facilis maxime incidunt explicabo harum numquam. Ut, animi voluptatem. Nesciunt ipsam libero itaque assumenda dicta aut est placeat similique delectus error soluta vero iste ea, eos, officiis tempora, optio quasi illo omnis. Veniam sapiente dicta tempora optio beatae totam voluptatibus voluptates culpa? Modi laborum voluptatibus optio vero culpa, ullam aperiam? Inventore amet corporis, soluta hic laudantium ratione cumque aliquid reiciendis officiis odit nisi fugit cum quibusdam suscipit iste autem blanditiis minus quisquam maxime accusantium veniam similique. Soluta commodi libero suscipit officiis quas? Reiciendis voluptatum nesciunt aliquam impedit sed voluptate magni, fugit quod rerum cupiditate quis omnis tenetur veritatis quasi! Temporibus nemo architecto eos mollitia laboriosam officia est porro nesciunt placeat veritatis voluptatibus sequi, quaerat repudiandae quia ipsum eius, possimus nihil voluptate itaque iure deserunt omnis! Sint maxime at quae vel ad ipsa vitae voluptates beatae illum esse cumque, mollitia sed odit impedit magni nostrum nulla dolore doloremque iusto iste sit debitis unde?</p>
            </div>
        </div>
    );
}