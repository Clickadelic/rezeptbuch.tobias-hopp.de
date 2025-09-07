import { Button } from '@/components/ui/button';
import { RiMenuUnfold2Fill } from 'react-icons/ri';
export default function MegaMenu() {
    return (
        <div className="mt-2 group relative">
            <Button
                variant="primary"
                className="relative cursor-default group-hover:bg-slate-700 hover:bg-slate-700"
            >
                <RiMenuUnfold2Fill className="size-6" />
                Menü
            </Button>
            <div className="invisible group-hover:visible absolute top-10 -left-2 w-[880px] p-6 rounded-xl shadow-lg h-96 bg-white border border-slate-200">
                <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-2">
                        <h3 className="text-lg font-medium mb-1">Kategorie</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-slate-600 hover:text-slate-800">
                                    Gerichte
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-600 hover:text-slate-800">
                                    Cocktails
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-600 hover:text-slate-800">
                                    Desserts
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-2">
                        <h3 className="text-lg font-medium mb-1">Kategorie</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-slate-600 hover:text-slate-800">
                                    Gerichte
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-600 hover:text-slate-800">
                                    Cocktails
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-600 hover:text-slate-800">
                                    Desserts
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-2">
                        <h3 className="text-lg font-medium mb-1">Kategorie</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-slate-600 hover:text-slate-800">
                                    Gerichte
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-600 hover:text-slate-800">
                                    Cocktails
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-600 hover:text-slate-800">
                                    Desserts
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
