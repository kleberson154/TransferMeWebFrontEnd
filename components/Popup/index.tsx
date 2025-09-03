import React from 'react'

export function Success({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 bg-green-500 text-white font-bold py-2 px-4 rounded text-center">
      {children}
    </p>
  )
}

export function Failed({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 bg-red-500 text-white font-bold py-2 px-4 rounded text-center">
      {children}
    </p>
  )
}
