export const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function apiRequest(path: string, method: string, body?: unknown) {
  const res = await fetch(`${API_URL}${path}`, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined
  })
  return res.json()
}
