import Achievement from '@/components/reusables/Achievements/Achievement';
import { Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';
interface AchievementsProps {
    title?: string;
    icon?: React.ReactNode;
    className?: string;
}

export default function AchievementsDirectory({ title, icon }: AchievementsProps) {
    return (
        <div className="w-full rounded-xl bg-gray-100 dark:bg-gray-900 p-4">
            <h3 className={cn('text-lg flex gap-2')}>
                {icon}
                {title || 'Deine Daten'}
            </h3>
            <div className={cn('grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-2')}>
                <Achievement
                    id={1}
                    name="Commis de Cuisine"
                    icon={<Trophy className="text-amber-400" />}
                    unlocked={true}
                />
                <Achievement id={2} name="Demi-Chef" icon={icon} unlocked={false} />
                <Achievement id={3} name="Sous-Chef" icon={icon} unlocked={false} />
                <Achievement id={4} name="Chef" icon={icon} unlocked={false} />
                <Achievement id={5} name="Commis de Cuisine" icon={icon} unlocked={false} />
                <div className="achievement-summary">Checklist als letzte Box</div>
            </div>
            <div className="w-full rounded-xl bg-gray-100 dark:bg-gray-900 p-4">
                <Progress
                    className="w-full progress bg-gray-200 rounded-full"
                    value={20}
                    max={100}
                ></Progress>
            </div>
        </div>
    );
}
