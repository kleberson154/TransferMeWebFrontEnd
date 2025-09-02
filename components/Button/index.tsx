import React from 'react'

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="bg-indigo-500 hover:bg-indigo-600 hover:cursor-pointer text-white font-bold py-2 px-4 rounded text-center"
      type="submit"
    >
      {children}
    </button>
  )
}
