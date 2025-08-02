import { GrNavigate } from "react-icons/gr";

/**
 * A component that renders a right sidebar with a title and a subtitle.
 *
 * @example
 * <RightSidebar />
 */
export default function RightSidebar() {
    return (
        <aside>
            <h2 className="text-2xl my-3 flex flex-row gap-2"><GrNavigate className="mt-1" />Navigation</h2>
            <h2 className="text-slate-600 text-2xl my-3">Subtitle</h2>
        </aside>
    );
}