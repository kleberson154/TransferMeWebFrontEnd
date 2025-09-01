'use client'
import { apiRequest } from '@/lib/api'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
//import Login from './login/page'

interface User {
  _id: string
  email: string
  password: string
  firstName: string
  lastName: string
  phone: string
  balance: number
  limitCredit: number
}

export default function Home() {
  return (
    <main className="p-6 flex flex-col items-center justify-start min-h-screen bg-indigo-50 text-white py-16">
      <span className="text-4xl font-bold flex justify-center items-center">
        <Image src="/images/logo.png" alt="Logo" width={70} height={50} />
        <h1 className="ml-2 text-2xl sm:text-4xl font-medium text-indigo-400">
          TransferMe
        </h1>
      </span>
      <p className="text-sm text-black py-8">Seja bem-vindo ao TransferMe.</p>
      <div className="money bg-indigo-100 rounded-2xl sm:min-w-90 px-6 py-8">
        <div className="saldo">
          <p className="text-lg text-black">Saldo</p>
          <p className="text-2xl text-black">$0.00</p>
        </div>
        <div className="limite-credito mt-4">
          <p className="text-lg text-black">Limite de Crédito</p>
          <p className="text-2xl text-black">$0.00</p>
        </div>
      </div>
      <div className="actions mt-8 flex flex-col sm:flex-row flex-wrap gap-2">
        <Link
          href="/transfer"
          className="bg-indigo-500 hover:bg-indigo-600 hover:cursor-pointer text-white font-bold py-2 px-4 rounded text-center"
        >
          Transferência
        </Link>
        <Link
          href="/withdraw"
          className="bg-indigo-500 hover:bg-indigo-600 hover:cursor-pointer text-white font-bold py-2 px-4 rounded text-center"
        >
          Sacar
        </Link>
        <Link
          href="/deposit"
          className="bg-indigo-500 hover:bg-indigo-600 hover:cursor-pointer text-white font-bold py-2 px-4 rounded text-center"
        >
          Depositar
        </Link>
      </div>
      <Link
        href="/"
        className="bg-red-500 hover:bg-red-600 hover:cursor-pointer text-white font-bold py-2 px-4 rounded text-center mt-5 w-32"
      >
        Sair
      </Link>
    </main>
  )
}
