import Link from 'next/link'
import React from 'react'

export default function LinkNav({
  href,
  children
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="text-indigo-400 hover:text-indigo-500 hover:cursor-pointer"
    >
      {children}
    </Link>
  )
}
