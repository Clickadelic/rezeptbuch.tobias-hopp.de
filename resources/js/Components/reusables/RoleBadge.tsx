
interface RoleBadgeProps {
    role?: string;
}

export default function RoleBadge({ role }: RoleBadgeProps) {

    return (
        <div className="px-2 py-1 text-xs font-medium bg-primary text-white rounded-md">
            {role}
        </div>
    );
}