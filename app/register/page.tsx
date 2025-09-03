'use client'
import Button from '@/components/Button'
import Form from '@/components/Form'
import Input from '@/components/Input'
import LinkNav from '@/components/LinkNav'
import Logo from '@/components/Logo'
import { Failed, Success } from '@/components/Popup'
import { apiRequest } from '@/lib/api'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Page() {
  const router = useRouter()
  const [form, setForm] = useState({
    email: '',
    senha: '',
    nome: '',
    sobrenome: '',
    telefone: ''
  })
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const res = await apiRequest('/register', 'POST', form)
    setMessage(res.error ? res.error : 'Usuário cadastrado com sucesso!')
    if (message == 'Usuário cadastrado com sucesso!') {
      setTimeout(() => {
        router.push('/')
      }, 2000)
    }
  }

  return (
    <main className="p-6 flex flex-col items-center justify-start min-h-screen bg-indigo-50 text-white py-16">
      <Logo />
      <p className="text-sm text-indigo-400 py-8">
        Seu melhor parceiro para transferências de dinheiro
      </p>
      <h1 className="text-xl text-black font-bold mb-4">Sign Up</h1>
      <Form handleSubmit={handleSubmit}>
        {Object.keys(form).map(key => (
          <Input
            key={key}
            type="text"
            placeholder={key}
            onChange={e => setForm({ ...form, [key]: e.target.value })}
          />
        ))}
        <div className="flex w-full justify-center">
          <Button>Cadastrar</Button>
        </div>
      </Form>
      {message == 'Usuário cadastrado com sucesso!' && (
        <Success>{message}</Success>
      )}
      {message == 'Usuário já existe' && <Failed>{message}</Failed>}
      <span className="text-sm text-gray-500 py-8">
        Já tem uma conta? <LinkNav href="/">Faça login</LinkNav>
      </span>
    </main>
  )
}
