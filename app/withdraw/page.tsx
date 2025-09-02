'use client'
import { useState } from 'react'
import { apiRequest } from '@/lib/api'
import Logo from '@/components/Logo'
import Input from '@/components/Input'
import Button from '@/components/Button'
import LinkNav from '@/components/LinkNav'
import Form from '@/components/Form'
import { useAuth } from '@/hooks/useAuth'

export default function Page() {
  useAuth()
  const [form, setForm] = useState({ email: '', value: 0.0 })
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const res = await apiRequest('/withdraw', 'POST', form)
    setMessage(res.error ? res.error : `Novo saldo: R$${res.balance}`)
    if (!res.error) {
      window.location.href = '/success'
      window.sessionStorage.setItem('typeAction', 'Saque')
    }
  }

  return (
    <main className="p-6 flex flex-col items-center justify-start min-h-screen bg-indigo-50 text-white py-16">
      <Logo />
      <p className="text-sm text-black py-8 sm:w-80">
        Por favor, insira o valor que deseja sacar no campo abaixo.
      </p>
      <h1 className="text-xl text-black font-bold mb-4">Saque</h1>
      <Form handleSubmit={handleSubmit}>
        <label htmlFor="value" className="text-black">
          Valor
        </label>
        <Input
          type="number"
          placeholder="0.00"
          value={form.value}
          onChange={e =>
            setForm({ ...form, value: parseFloat(e.target.value) })
          }
        />
        <div className="groupBtn flex flex-col gap-4 w-full items-center">
          <Button>Sacar</Button>
          <LinkNav href="/home">Voltar</LinkNav>
        </div>
      </Form>
      {message && <p className="mt-4">{message}</p>}
    </main>
  )
}
