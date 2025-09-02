import Image from 'next/image'
import React from 'react'

export default function Logo() {
  return (
    <span className="text-4xl font-bold flex justify-center items-center">
      <Image src="/images/logo.png" alt="Logo" width={70} height={50} />
      <h1 className="ml-2 text-2xl sm:text-4xl font-medium text-indigo-400">
        TransferMe
      </h1>
    </span>
  )
}
