export const fetchTokens = async ({
  token,
  url = import.meta.env.VITE_AUTH_API_URL || '',
  headers,
}: { token: string; url?: string; headers?: Headers}) => {
  const res = await fetch(`${url}/auth`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...headers || {},
    },
    body: JSON.stringify({
      token,
    }),
  })

  if (!res?.ok) throw { status: res.status }
  return res.json()
}
