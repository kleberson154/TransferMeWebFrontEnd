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
  const [users, setUsers] = useState<User[]>([])
  const [form, setForm] = useState({ email: '', password: '' })
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('http://localhost:5000/api/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const res = await apiRequest('/', 'POST', form)
    setMessage(res.error ? res.error : `Bem-vindo, ${res.firstName}!`)
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
      <h1 className="text-xl text-black font-bold mb-4">Login</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-3 sm:w-80"
      >
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          className="border border-indigo-200 text-black bg-indigo-100 p-2 rounded w-full"
        />
        <input
          type="password"
          placeholder="Senha"
          value={form.password}
          onChange={e => setForm({ ...form, password: e.target.value })}
          className="border border-indigo-200 text-black bg-indigo-100 p-2 rounded w-full"
        />
        <button
          className="bg-indigo-400 text-white py-2 rounded w-full hover:bg-indigo-500 hover:cursor-pointer"
          type="submit"
        >
          Entrar
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}

      <span className="text-sm text-gray-500 py-8">
        Não tem uma conta?{' '}
        <Link
          href="/register"
          className="text-indigo-400 hover:text-indigo-500 hover:cursor-pointer"
        >
          Cadastre-se
        </Link>
      </span>
    </main>
  )
}
