import { useState } from 'react'
import { apiRequest } from '@/lib/api'

export default function Page() {
  const [form, setForm] = useState({ email: '', value: 0 })
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const res = await apiRequest('/deposit', 'POST', form)
    setMessage(res.error ? res.error : `Novo saldo: R$${res.balance}`)
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Depósito</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Valor"
          value={form.value}
          onChange={e =>
            setForm({ ...form, value: parseFloat(e.target.value) })
          }
          className="border p-2 rounded"
        />
        <button className="bg-blue-500 text-white py-2 rounded">
          Depositar
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  )
}
