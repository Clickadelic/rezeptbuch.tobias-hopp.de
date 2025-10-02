
import { IoIosTrendingUp, IoIosTrendingDown } from "react-icons/io";
import { MdOutlineMobiledataOff } from "react-icons/md";
interface DataCardProps {
    children?: React.ReactNode
    icon?: React.ReactNode
    title?: string
    count?: number | undefined
    trend?: "positive" | "negative" | undefined
    increase?: number | string | undefined
    total: number
}


/**
 * Displays a single data card.
 *
 * @param {DataCardProps} props - properties of the component
 * @returns {JSX.Element} - the rendered component
 * @description
 * This component displays a single data card with an icon, title, count, total, and increase.
 * The design is based on the Tailwind CSS utility-first classes.
 */
export default function DataCard({icon, title, count, total, trend, increase, children }: DataCardProps) {
    if(children) {
        return (
            <div className="w-full flex flex-col justify-between aspect-video border border-gray-50 dark:border-gray-800 rounded-xl p-4 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800">
                {children}
            </div>
        )
    }
    return (
        <div className="w-full flex flex-col justify-between aspect-video border border-gray-50 dark:border-gray-700 rounded-xl p-4 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800">
            <div className="flex flex-row justify-between items-center gap-1">
                <h4 className="text-md text-gray-800 dark:text-gray-200 font-oswald flex justify-between gap-2">
                    {title}
                </h4>
                <div className="flex items-center gap-1 text-sm rounded-full px-1.5">
                    {trend === "positive" ? <IoIosTrendingUp className="text-emerald-300" /> : <IoIosTrendingDown className="text-rose-400" />}
                    {trend === "positive" ? <span className="size-3 rounded-full bg-emerald-300"></span> : <span className="size-3 rounded-full bg-rose-400"></span>}
                    {trend === "positive" ? <span className="text-emerald-300">{increase}%</span> : <span className="text-rose-400">{increase}%</span>}
                </div>
            </div>

            <div className="flex justify-between gap-2">
                <span className="text-gray-400">{icon}</span>
                <h3 className="text-xl font-oswald">{count}/{total}</h3>
            </div>
        </div>
    );
}