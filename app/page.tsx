'use client'
import Button from '@/components/Button'
import Form from '@/components/Form'
import Input from '@/components/Input'
import LinkNav from '@/components/LinkNav'
import Logo from '@/components/Logo'
import { apiRequest } from '@/lib/api'
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
    if (res.token) {
      localStorage.setItem('token', res.token)
      localStorage.setItem('email', form.email)
      setMessage(res.error ? res.error : `Bem-vindo, ${res.firstName}!`)
      window.location.href = '/home'
    } else {
      setMessage(res.error ? res.error : 'Erro desconhecido')
    }
  }

  return (
    <main className="p-6 flex flex-col items-center justify-start min-h-screen bg-indigo-50 text-white py-16">
      <Logo />
      <p className="text-sm text-indigo-400 py-8">
        Seu melhor parceiro para transferências de dinheiro
      </p>
      <h1 className="text-xl text-black font-bold mb-4">Login</h1>
      <Form handleSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={form.password}
          onChange={e => setForm({ ...form, password: e.target.value })}
        />
        <div className="flex w-full justify-center">
          <Button>Entrar</Button>
        </div>
      </Form>
      {message && <p className="mt-4">{message}</p>}

      <span className="text-sm text-gray-500 py-8">
        Não tem uma conta? <LinkNav href="/register">Cadastre-se</LinkNav>
      </span>
    </main>
  )
}
