import Link from 'next/link'
import React from 'react'

export default function LinkButton({
  children,
  href
}: {
  children: React.ReactNode
  href: string
}) {
  return (
    <Link
      href={href}
      className="bg-indigo-500 hover:bg-indigo-600 hover:cursor-pointer text-white font-bold py-2 px-4 rounded text-center"
    >
      {children}
    </Link>
  )
}
