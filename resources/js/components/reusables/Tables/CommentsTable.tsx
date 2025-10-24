"use client";

import { useState } from "react";
import { Link } from "@inertiajs/react";
import axios from "axios";

import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import ContextMenu from "@/components/reusables/ContextMenu";
import Paginated from "@/types/Paginated";
import Pagination from "@/components/reusables/Pagination";
import PublishSwitch from "@/components/reusables/PublishSwitch";
import { GoPlus } from "react-icons/go";
import { Recipe } from "@/types/Recipe";


import { cn } from "@/lib/utils";

interface CommentsTableProps {

  title?: string;
  icon?: React.ReactNode;
  className?: string;
  tableClasses?: string;
}

export default function CommentsTable({
  title,
  icon,

  className,
  tableClasses,
}: CommentsTableProps) {
  const [comments, setComments] = useState<Paginated<Comment>>();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchComments = async (url?: string | null) => {
    if (!url) return;
    setLoading(true);
    try {
      const response = await axios.get(url);
      setComments(response.data.comments);
    } catch (error) {
      console.error("Fehler beim Laden der Seite:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={cn(
        "w-full overflow-hidden min-h-44 bg-gray-100 dark:bg-gray-900 p-4 rounded-xl",
        className
      )}
    >
      <h3 className={cn("text-lg flex gap-2", comments && comments?.data?.length >= 1 && "mb-3")}>{icon}{title || "Deine Kommentare"}</h3>
      {/* Wenn keine Rezepte vorhanden */}
      {(!comments || comments.data.length === 0) && (
        <div className="h-[calc(100%-25px)] flex flex-col gap-2 items-center justify-center">
            <h4 className="text-gray-600 dark:text-gray-400 text-center mb-2">Du hast noch keine Kommenare hinterlassen.</h4>
            <Button asChild variant="primary" className="hover:bg-emerald-700">
                <Link href={route('comments.index')} title="Erstelle einen Kommentar"><GoPlus /> Kommentar erstellen</Link>
            </Button>
        </div>
      )}
      {/* Tabelle */}
      {(comments && comments?.data?.length >= 1) && (
        <Table
            className={cn(
            "min-w-full border-collapse table-auto caption-bottom",
            tableClasses
            )}
        >
            <TableHeader>
            <TableRow>
                <TableHead className="w-[48px]">Status</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Kategorie</TableHead>
                <TableHead className="hidden sm:table-cell">Schwierigkeit</TableHead>
                <TableHead className="hidden sm:table-cell">Bewertung</TableHead>
                <TableHead className="hidden sm:table-cell">Benutzer</TableHead>
                <TableHead className="text-right">Aktion</TableHead>
            </TableRow>
            </TableHeader>

            <TableBody>
            {comments.data.map((comment: Comment) => (
                <TableRow key={comment.id} className="hover:bg-white dark:hover:bg-gray-700">
                {/* <TableCell>
                    <PublishSwitch comment={comment} status={comment.status as "draft" | "published"} />
                </TableCell>
                <TableCell className="cursor-default">{comment.name}</TableCell>
                <TableCell className="cursor-default">{comment.category?.name}</TableCell>
                <TableCell className="cursor-default hidden sm:table-cell">{comment.difficulty}</TableCell>
                <TableCell className="cursor-default hidden sm:table-cell">{comment.rating}</TableCell>
                <TableCell className="cursor-default hidden sm:table-cell">{comment.user?.name}</TableCell>
                <TableCell className="text-right">
                    <ContextMenu comment={comment} dotStyle="horizontal" />
                </TableCell> */}
                </TableRow>
            ))}

            {loading && (
                <TableRow>
                <TableCell colSpan={7} className="text-center py-4">
                    Lade Kommentare...
                </TableCell>
                </TableRow>
            )}
            </TableBody>
        </Table>
      )}
      {/* Pagination unten außerhalb der Tabelle */}
      {(comments && comments?.data?.length >= 1) && (
        <div className="mt-4">
            <Pagination links={comments.links} loading={loading} />
        </div>
      )}
      
    </div>
  );
}
