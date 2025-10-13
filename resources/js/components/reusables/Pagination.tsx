import { Link } from '@inertiajs/react'

interface PaginationProps {
  links: {
    url: string | null
    label: string
    active: boolean
  }[]
}

export default function Pagination({ links }: PaginationProps) {
  console.log(links);
  if (links.length >= 2) return null

  return (
    <div className="flex items-center justify-center space-x-2 mt-12">
      {links.map((link, i) => (
        <Link
          key={i}
          href={link.url || '#'}
          className={`px-3 py-1 text-sm rounded transition-colors duration-200
            ${link.active ? 'bg-primary dark:primary text-white' : 'bg-gray-100 dark:bg-gray-700 dark:text-gray-200 text-gray-800 hover:bg-gray-200'}
            ${!link.url ? 'pointer-events-none opacity-50' : ''}`}
          dangerouslySetInnerHTML={{ __html: link.label }}
        />
      ))}
    </div>
  )
}
