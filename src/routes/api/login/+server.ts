import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import { getUserByEmail } from '$lib/db';

export const POST: RequestHandler = async ({ request }) => {
  const { email, password } = await request.json();
  const user = getUserByEmail(email);

  if (!user || user.password !== password) {
    return json({ error: 'Invalid credentials' }, { status: 401 });
  }

  return json({ message: 'Login successful', user });
};
