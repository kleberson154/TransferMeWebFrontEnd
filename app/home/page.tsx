'use client'
import LinkButton from '@/components/LinkButton'
import LinkNav from '@/components/LinkNav'
import Logo from '@/components/Logo'
import { useAuth } from '@/hooks/useAuth'
import { apiRequest } from '@/lib/api'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
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
  useAuth()
  const router = useRouter()

  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  function clearToken() {
    localStorage.removeItem('token')
  }

  async function fetchUserData() {
    const token = localStorage.getItem('token')
    if (!token) {
      router.replace('/denied')
      return
    }

    try {
      const res = await apiRequest('/home', 'GET')
      if (res.user) {
        setUser(res.user)
      }
    } catch (err: unknown) {
      console.error('fetchUserData error', err)
      const message = err instanceof Error ? err.message : String(err)
      setError(message || 'Erro ao buscar dados')
      router.replace('/')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  if (loading) {
    return (
      <main className="p-6 flex flex-col items-center justify-start min-h-screen bg-indigo-50 text-white py-16">
        <Logo />
        <p className="text-sm text-black py-8">Carregando...</p>
      </main>
    )
  }

  if (error) {
    return <main className="p-6">Erro: {error}</main>
  }

  return (
    <main className="p-6 flex flex-col items-center justify-start min-h-screen bg-indigo-50 text-white py-16">
      <Logo />
      <p className="text-sm text-black py-8">
        Seja bem-vindo {user?.firstName}!
      </p>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      <div className="money bg-indigo-100 rounded-2xl sm:min-w-90 px-6 py-8">
        <div className="saldo">
          <p className="text-lg text-black">Saldo</p>
          <p className="text-2xl text-black">
            ${user ? user.balance.toFixed(2) : '0.00'}
          </p>
        </div>
        <div className="limite-credito mt-4">
          <p className="text-lg text-black">Limite de Crédito</p>
          <p className="text-2xl text-black">
            ${user ? user.limitCredit.toFixed(2) : '0.00'}
          </p>
        </div>
      </div>
      <div className="actions mt-8 flex flex-col sm:flex-row flex-wrap gap-2">
        <LinkButton href="/transfer">Transferência</LinkButton>
        <LinkButton href="/withdraw">Sacar</LinkButton>
        <LinkButton href="/deposit">Depositar</LinkButton>
      </div>
      <Link
        href="/"
        className="bg-red-500 hover:bg-red-600 hover:cursor-pointer text-white font-bold py-2 px-4 rounded text-center mt-5 w-32"
        onClick={clearToken}
      >
        Sair
      </Link>
    </main>
  )
}
