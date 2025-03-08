import Database from 'better-sqlite3';

const db = new Database('astroWheel.db');

export function getUserByEmail(email: string) {
  return db.prepare('SELECT * FROM users WHERE email = ?').get(email);
}
