import { Switch } from '@/components/ui/switch';
import { useState } from 'react';
import { usePage } from '@inertiajs/react';

interface PublishSwitchProps {
    status: "draft" | "published"
}

export default function PublishSwitch({status}: PublishSwitchProps) {
    return (
        <Switch
            className="hover:cursor-pointer"
            checked={status === "published"}
            onChange={() => {}}
        />
    )
}
