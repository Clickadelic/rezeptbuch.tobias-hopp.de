"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    endpoint: string

}

export function DataTable<TData, TValue>({ columns, endpoint }: DataTableProps<TData, TValue>) {
    const [data, setData] = useState<TData[]>([])
    const [search, setSearch] = useState("")
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [loading, setLoading] = useState(false)

    // ---- Ladefunktion ----
    async function loadData(searchValue = search, pageValue = page) {
        setLoading(true)
        const { data } = await axios.get(endpoint, {
            params: {
                search: searchValue,
                page: pageValue,
            }
        })
        setData(data.data)
        setTotalPages(data.last_page)
        setLoading(false)
    }

    // ---- Suche ----
    function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value
        setSearch(value)
        setPage(1)
        loadData(value, 1)
    }

    // ---- Pagination ----
    function nextPage() {
        if (page < totalPages) {
            const p = page + 1
            setPage(p)
            loadData(search, p)
        }
    }

    function prevPage() {
        if (page > 1) {
            const p = page - 1
            setPage(p)
            loadData(search, p)
        }
    }

    // ---- Initial load ----
    useEffect(() => {
        loadData()
    }, [])

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    console.log("Data", data);

    return (
        <div className="space-y-3">

            {/* SEARCHFIELD */}
            <input
                type="text"
                placeholder="Suche..."
                className="px-3 py-1 rounded border text-sm bg-white dark:bg-gray-800"
                value={search}
                onChange={handleSearch}
            />

            {/* TABLE */}
            <div className="overflow-hidden rounded-md border">
                <Table>
                    <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <TableHead key={header.id}>
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(header.column.columnDef.header, header.getContext())
                                }
                            </TableHead>
                        ))}
                        </TableRow>
                    ))}
                    </TableHeader>

                    <TableBody>
                    {loading ? (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="text-center h-24">
                                Lade Daten…
                            </TableCell>
                        </TableRow>
                    ) : table.getRowModel().rows.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow key={row.id}>
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="text-center h-24">
                                Keine Ergebnisse.
                            </TableCell>
                        </TableRow>
                    )}
                    </TableBody>
                </Table>
            </div>

            {/* PAGINATION */}
            <div className="flex justify-between items-center pt-2">
                <button disabled={page <= 1} onClick={prevPage} className="btn">
                    ← Zurück
                </button>
                <span>
                    Seite {page} / {totalPages}
                </span>
                <button disabled={page >= totalPages} onClick={nextPage} className="btn">
                    Weiter →
                </button>
            </div>
        </div>
    )
}
