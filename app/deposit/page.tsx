'use client'
import { useState } from 'react'
import { apiRequest } from '@/lib/api'
import Button from '@/components/Button'
import LinkNav from '@/components/LinkNav'
import Form from '@/components/Form'
import Logo from '@/components/Logo'
import Input from '@/components/Input'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'

export default function Page() {
  useAuth()
  const router = useRouter()
  const [form, setForm] = useState({ value: 0.0 })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const res = await apiRequest('/deposit', 'POST', form)
    if (!res.error) {
      router.replace('/success')
      window.sessionStorage.setItem('typeAction', 'Depósito')
    }
  }

  return (
    <main className="p-6 flex flex-col items-center justify-start min-h-screen bg-indigo-50 text-white py-16">
      <Logo />
      <p className="text-sm text-black py-8 sm:w-80">
        Por favor, insira o valor que deseja depositar no campo abaixo.
      </p>
      <h1 className="text-xl text-black font-bold mb-4">Depósito</h1>
      <Form handleSubmit={handleSubmit}>
        <label htmlFor="value" className="text-black">
          Valor
        </label>
        <Input
          type="number"
          placeholder="0.00"
          onChange={e =>
            setForm({ ...form, value: parseFloat(e.target.value) })
          }
        />
        <div className="groupBtn flex flex-col gap-4 w-full items-center">
          <Button>Depositar</Button>
          <LinkNav href="/home">Voltar</LinkNav>
        </div>
      </Form>
    </main>
  )
}
