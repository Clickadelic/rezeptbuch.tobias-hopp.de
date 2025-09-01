interface BentoGridProps {
    slot1?: React.ReactNode;
}

export function BentoGrid({ slot1 }: BentoGridProps) {
    return (
        <div className="grid grid-cols-5 grid-rows-5 gap-4">
            <div className="col-span-3 row-span-2 rounded-xl">1</div>
            <div className="row-span-2 col-start-4 rounded-xl">2</div>
            <div className="row-span-2 col-start-5 rounded-xl">3</div>
            <div className="row-span-3 row-start-3 bg-slate-200 rounded-xl">4</div>
            <div className="p-2 col-span-3 row-span-2 row-start-3 bg-slate-200 rounded-xl">5</div>
            <div className="p-2 row-span-3 col-start-5 row-start-3 bg-slate-200 rounded-xl">6</div>
            <div className="p-2 col-span-2 col-start-2 row-start-5 bg-slate-200 rounded-xl">7</div>
            <div className="p-2 col-start-4 row-start-5 bg-slate-200 rounded-xl">8</div>
        </div>
    );
}

export default BentoGrid;
