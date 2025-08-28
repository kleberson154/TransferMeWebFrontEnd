import { useEffect, useState } from 'react'

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

  useEffect(() => {
    fetch('http://localhost:5000/api/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Usuários</h1>
      <ul className="mt-4">
        {users.map(u => (
          <li key={u._id} className="border p-2 rounded">
            {u.firstName} - {u.email}
          </li>
        ))}
      </ul>
    </main>
  )
}
