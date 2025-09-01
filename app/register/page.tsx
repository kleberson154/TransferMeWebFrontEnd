'use client'
import { apiRequest } from '@/lib/api'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Page() {
  const [form, setForm] = useState({
    email: '',
    senha: '',
    primeiroNome: '',
    ultimoNome: '',
    telefone: ''
  })
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const res = await apiRequest('/register', 'POST', form)
    setMessage(res.error ? res.error : 'Usuário cadastrado com sucesso!')
  }

  return (
    <main className="p-6 flex flex-col items-center justify-start min-h-screen bg-indigo-50 text-white py-16">
      <span className="text-4xl font-bold flex justify-center items-center">
        <Image src="/images/logo.png" alt="Logo" width={70} height={50} />
        <h1 className="ml-2 text-2xl sm:text-4xl font-medium text-indigo-400">
          TransferMe
        </h1>
      </span>
      <p className="text-sm text-indigo-400 py-8">
        Seu melhor parceiro para transferências de dinheiro
      </p>
      <h1 className="text-xl text-black font-bold mb-4">Sign Up</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-3 sm:w-80"
      >
        {Object.keys(form).map(key => (
          <input
            key={key}
            type="text"
            placeholder={key}
            value={form[key as keyof typeof form]}
            onChange={e => setForm({ ...form, [key]: e.target.value })}
            className="border border-indigo-200 text-black bg-indigo-100 p-2 rounded w-full"
          />
        ))}
        <button
          className="bg-indigo-400 text-white py-2 rounded w-full hover:bg-indigo-500 hover:cursor-pointer"
          type="submit"
        >
          Cadastrar
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}

      <span className="text-sm text-gray-500 py-8">
        Já tem uma conta?{' '}
        <Link
          href="/"
          className="text-indigo-400 hover:text-indigo-500 hover:cursor-pointer"
        >
          Faça login
        </Link>
      </span>
    </main>
    /* <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Criar Conta</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {Object.keys(form).map(key => (
          <input
            key={key}
            type="text"
            placeholder={key}
            value={form[key as keyof typeof form]}
            onChange={e => setForm({ ...form, [key]: e.target.value })}
            className="border p-2 rounded"
          />
        ))}
        <button className="bg-blue-500 text-white p-2 rounded">
          Cadastrar
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div> */
  )
}
