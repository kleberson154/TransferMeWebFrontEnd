import React from 'react'

export default function Input({
  type,
  placeholder,
  value,
  onChange
}: {
  type: string
  placeholder: string
  value: string | number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border border-indigo-200 text-black bg-indigo-100 p-2 rounded w-full"
    />
  )
}
