'use client'
import { useState } from 'react'
import { apiRequest } from '@/lib/api'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  const [form, setForm] = useState({ email: '', value: 0.0 })
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const res = await apiRequest('/withdraw', 'POST', form)
    setMessage(res.error ? res.error : `Novo saldo: R$${res.balance}`)
    if (!res.error) {
      window.location.href = '/success'
    }
  }

  return (
    <main className="p-6 flex flex-col items-center justify-start min-h-screen bg-indigo-50 text-white py-16">
      <span className="text-4xl font-bold flex justify-center items-center">
        <Image src="/images/logo.png" alt="Logo" width={70} height={50} />
        <h1 className="ml-2 text-2xl sm:text-4xl font-medium text-indigo-400">
          TransferMe
        </h1>
      </span>
      <p className="text-sm text-black py-8 sm:w-80">
        Por favor, insira o valor que deseja sacar no campo abaixo.
      </p>
      <h1 className="text-xl text-black font-bold mb-4">Saque</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-start gap-3 sm:w-80"
      >
        <label htmlFor="value" className="text-black">
          Valor
        </label>
        <input
          type="number"
          placeholder="0.00"
          value={form.value}
          onChange={e =>
            setForm({ ...form, value: parseFloat(e.target.value) })
          }
          className="border border-indigo-200 text-black bg-indigo-100 p-2 rounded w-full"
        />
        <div className="groupBtn flex flex-col gap-4 w-full items-center">
          <button className="bg-indigo-500 text-white w-30 py-2 rounded hover:bg-indigo-600 hover:cursor-pointer">
            Sacar
          </button>
          <Link
            href="/home"
            className="bg-indigo-500 text-white w-30 py-2 rounded hover:bg-indigo-600 hover:cursor-pointer text-center"
          >
            Voltar
          </Link>
        </div>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </main>
  )
}
