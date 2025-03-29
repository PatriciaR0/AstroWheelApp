import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
  const { email, password } = await request.json();

  const res = await fetch('http://localhost:3000/api/Auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  let resJson = await res.json()
  return json({token: resJson.token });
};
