import { apiRequest } from '@/lib/api'
import { useState } from 'react'

export default function Page() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: ''
  })
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const res = await apiRequest('/register', 'POST', form)
    setMessage(res.error ? res.error : 'Usuário cadastrado com sucesso!')
  }

  return (
    <div className="p-6 max-w-md mx-auto">
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
    </div>
  )
}
