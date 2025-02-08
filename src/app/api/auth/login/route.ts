import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { client } from '@/sanity/lib/client'; // Import your Sanity client

const SECRET_KEY = process.env.JWT_SECRET || 'fallback-secret-key'; // Use environment variable

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // Find user in Sanity
    const user = await client.fetch(`*[_type == "user" && email == $email][0]`, { email });

    if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });

    // Compare password
    const match = await bcrypt.compare(password, user.password);
    if (!match) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });

    // Generate JWT
    const token = jwt.sign({ email: user.email, id: user._id }, SECRET_KEY, { expiresIn: '1h' });
    console.log('JWT Secret:', SECRET_KEY);
    // Set token in cookies
    const response = NextResponse.json({ message: 'Login successful' });
    response.cookies.set('auth_token', token, { httpOnly: true, secure: true });

    return response;
  } catch {
    return NextResponse.json({ error: 'Login failed' }, { status: 500 });
}
}
