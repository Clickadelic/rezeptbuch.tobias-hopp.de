import { ContactSubmission } from '@/types/ContactSubmission';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { toHumanDate } from '@/lib/utils';

interface ContactSubmissionProps {
    className?: string;
    tableClasses?: string;
    contactSubmissions?: ContactSubmission[];
}

export default function ContactSubmissionsTable({
    className,
    tableClasses,
    contactSubmissions,
}: ContactSubmissionProps) {
    return (
        <div className={cn('w-full', className)}>
            <Table className={cn('table w-full', tableClasses)}>
                <TableHeader>
                    <TableRow>
                        <TableHead className="asd">Id</TableHead>
                        <TableHead className="asd">Name</TableHead>
                        <TableHead className="asd">E-Mail</TableHead>
                        <TableHead className="asd">Message</TableHead>
                        <TableHead className="asd">Datum</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {contactSubmissions?.map((submission: ContactSubmission) => (
                        <TableRow
                            key={submission.id}
                            className={cn('hover:bg-white dark:hover:bg-gray-700')}
                        >
                            <TableCell>{submission.id}</TableCell>
                            <TableCell>{submission.name}</TableCell>
                            <TableCell>{submission.email}</TableCell>
                            <TableCell>{submission.message}</TableCell>
                            <TableCell>{toHumanDate(submission.created_at)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
