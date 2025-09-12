
interface RoleBadgeProps {
    id?: string;
    role?: string;
}

export default function RoleBadge({ role, id }: RoleBadgeProps) {
    return (
        <div key={id} className="px-2 py-1 text-xs font-medium bg-primary text-white rounded-md">
            {role}
        </div>
    );
}