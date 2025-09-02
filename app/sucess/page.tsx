'use client'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/components/Logo'
import { useAuth } from '@/hooks/useAuth'

export default function Page() {
  useAuth()
  const typeAction = window.sessionStorage.getItem('typeAction')

  return (
    <main className="p-6 flex flex-col items-center justify-start min-h-screen bg-indigo-50 text-white py-16">
      <Logo />
      <div className="success mt-8 flex flex-col items-center">
        <Image
          src="/images/success.png"
          alt="Success"
          width={200}
          height={200}
        />
        <h1 className="text-4xl font-bold text-indigo-400 mt-8">Sucesso!</h1>
        <p className="text-sm text-black py-8 ">
          {typeAction} realizado com sucesso!
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
