"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username })
      });

      const data = await res.json();
      setMessage(data.message);

      if (res.ok) {
        router.push('/dashboard');
      }
    } catch {
      setMessage('เกิดข้อผิดพลาดในชื่อผู้ใช้');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">เข้าสู่ระบบ</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="กรอกชื่อผู้ใช้"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-black"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300"
        >
          เข้าสู่ระบบ
        </button>
        {message && (
          <p className="mt-4 text-center text-sm text-gray-600">{message}</p>
        )}
      </div>
    </div>
  );
}
