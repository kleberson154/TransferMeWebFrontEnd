'use client'
import { useState } from 'react'
import { apiRequest } from '@/lib/api'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <main className="p-6 flex flex-col items-center justify-start min-h-screen bg-indigo-50 text-white py-16">
      <span className="text-4xl font-bold flex justify-center items-center">
        <Image src="/images/logo.png" alt="Logo" width={70} height={50} />
        <h1 className="ml-2 text-2xl sm:text-4xl font-medium text-indigo-400">
          TransferMe
        </h1>
      </span>
      <div className="success mt-8 flex flex-col items-center">
        <Image
          src="/images/success.png"
          alt="Success"
          width={200}
          height={200}
        />
        <h1 className="text-4xl font-bold text-indigo-400 mt-8">Sucesso!</h1>
        <p className="text-sm text-black py-8 ">
          Depósito realizado com sucesso!
        </p>
        <Link
          href="/home"
          className="bg-indigo-500 hover:bg-indigo-600 text-white  py-2 px-4 rounded text-center hover:cursor-pointer"
        >
          Voltar para o Inicio
        </Link>
      </div>
    </main>
  )
}
