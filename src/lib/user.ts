import client from '@/lib/db';
import bcrypt from 'bcryptjs';

export const getUser = async (email: string) => {
  try {
    const query = 'SELECT * FROM users WHERE email = $1';
    const result = await client.query(query, [email]);

    if (result.rows.length === 0) {
      return null;
    }

    return result.rows[0];
  } catch (error) {
    console.error('Error fetching user:', error);
    throw new Error('Error fetching user');
  }
};

export const createUser = async (email: string, password: string) => {
  try {
    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = 'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *';
    const values = [email, hashedPassword];

    const result = await client.query(query, values);

    return result.rows[0];
  } catch (error) {
    console.error('Error creating user:', error);
    throw new Error('Error creating user');
  }
};
