import React from 'react'

export default function Input({
  type,
  placeholder,
  onChange
}: {
  type: string
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className="border border-indigo-200 text-black bg-indigo-100 p-2 rounded w-full"
    />
  )
}
