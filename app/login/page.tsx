import { useState } from 'react'
import { apiRequest } from '@/lib/api'

export default function Page() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const res = await apiRequest('/login', 'POST', form)
    setMessage(res.error ? res.error : `Bem-vindo, ${res.firstName}!`)
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Senha"
          value={form.password}
          onChange={e => setForm({ ...form, password: e.target.value })}
          className="border p-2 rounded"
        />
        <button className="bg-green-500 text-white py-2 rounded">Entrar</button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  )
}
