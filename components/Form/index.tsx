import React from 'react'

export default function Form({
  handleSubmit,
  children
}: {
  handleSubmit: (e: React.FormEvent) => void
  children: React.ReactNode
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-start gap-3 sm:w-80"
    >
      {children}
    </form>
  )
}
