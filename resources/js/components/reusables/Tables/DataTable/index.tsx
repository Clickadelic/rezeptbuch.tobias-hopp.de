"use client"

import { useEffect, useState } from "react"
import axios from "axios"

import { RiSearchLine } from 'react-icons/ri';
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Pagination from "@/components/reusables/Pagination"

interface PaginationLink {
    url: string | null
    label: string
    active: boolean
}

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    endpoint: string
}

export function DataTable<TData, TValue>({ columns, endpoint }: DataTableProps<TData, TValue>) {

    const [data, setData] = useState<TData[]>([])
    const [search, setSearch] = useState("")
    const [page, setPage] = useState<number>(1)
    const [totalPages, setTotalPages] = useState<number>(1)
    const [links, setLinks] = useState<PaginationLink[]>([])
    const [loading, setLoading] = useState<boolean>(false)

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
        setLinks(data.links ?? [])
        setLoading(false)
    }

    // ---- Seitenwechsel über die Pagination-Links ----
    function handlePageClick(url: string) {
        const p = Number(new URL(url, window.location.origin).searchParams.get("page") ?? 1)
        setPage(p)
        loadData(search, p)
    }

    // ---- Suche ----
    function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value
        setSearch(value)
        setPage(1)
        loadData(value, 1)
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
        <>

            {/* SEARCHFIELD */}
            <div className="w-full mx-auto max-w-96 flex gap-0">
				<input
					type="text"
					placeholder="Rezepte durchsuchen..."
					id="recipe-search"
					name="recipe-search"
					className="w-96 rounded-tl rounded-bl"
					value={search}
					onChange={handleSearch}
				/>
				<button onClick={() => loadData(search, 1)} className="px-4 py-2 bg-emerald-800 text-white rounded-tr rounded-br flex items-center gap-2">
					<RiSearchLine />
				</button>
			</div>

			{totalPages > 1 && (
                <Pagination links={links} onPageClick={handlePageClick} className="my-8" />
            )}

            {/* TABLE */}
            <div className="overflow-hidden rounded-md bg-gray-100 dark:bg-gray-900 border-b border-b-gray-200 dark:border-b-gray-700">
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
                            <TableCell colSpan={columns.length} className="text-center h-24 my-24">
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
            
            {totalPages > 1 && (
                <Pagination links={links} onPageClick={handlePageClick} className="mt-8" />
            )}
        </>
    )
}
