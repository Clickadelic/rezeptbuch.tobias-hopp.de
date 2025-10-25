import { Avatar as ShadCnAvatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { GiCook } from 'react-icons/gi';
import { cn } from '@/lib/utils';

interface AvatarProps {
  url?: string;        // kann absolute oder relative URL vom Upload sein
  name?: string;       // optional: für Initialen-Fallback
  className?: string;  // für custom Größen
}

export default function Avatar({ url, name, className }: AvatarProps) {
  const avatarUrl = url
    ? url.startsWith('http')
      ? url
      : `/storage/${url}` // Laravel Storage Support
    : undefined;

  // Initialen, falls kein Bild vorhanden ist
  const initials =
    name
      ?.split(' ')
      .map((n) => n[0])
      .join('')
      .slice(0, 2)
      .toUpperCase() ?? '';

  return (
    <ShadCnAvatar className={cn('size-8', className)}>
      <AvatarImage src={avatarUrl} alt={name ?? 'Benutzeravatar'} />
      <AvatarFallback className="bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-300 flex items-center justify-center font-medium">
        {initials || <GiCook className="text-gray-700 dark:text-gray-400" />}
      </AvatarFallback>
    </ShadCnAvatar>
  );
}
