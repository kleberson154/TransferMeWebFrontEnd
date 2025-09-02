import LinkNav from '@/components/LinkNav'
import Logo from '@/components/Logo'
import Image from 'next/image'
import React from 'react'

export default function Page() {
  return (
    <main className="p-6 flex flex-col items-center justify-start min-h-screen bg-indigo-50 text-white py-16">
      <Logo />
      <div className="success mt-8 flex flex-col items-center">
        <Image src="/images/401.png" alt="401" width={200} height={200} />
        <h1 className="text-4xl font-bold text-indigo-400 mt-8">
          Acesso Negado!
        </h1>
        <p className="text-sm text-black py-8 ">
          Você não tem permissão para acessar esta página.
        </p>
        <LinkNav href="/">Voltar para o Inicio</LinkNav>
      </div>
    </main>
  )
}
