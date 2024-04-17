"use client"

import { useState } from 'react';
import { auth } from '@/app/data/firebaseConfig';
import {  signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'next/navigation';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const router = useRouter();


  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      NotificationManager.success('Login successful', 'Success');
      router.push("/")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  };

  return (
    <div className="container mx-auto max-w-sm items-center text-gray-600 rounded-xl bg-slate-100 py-32 px-8 mt-8">
      <h1 className="text-2xl font-bold text-center mb-4">Sign in</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full px-4 py-2 rounded border border-gray-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-medium">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full px-4 py-2 rounded border border-gray-300"
            required
          />
        </div>
        <div className="mb-4">
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Sign In</button>
        </div>
      </form>
      <div className="mb-4 text-center">
        <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
      </div>
      <div className="text-center">
        <a href="/pages/auth/register" className="text-blue-500 hover:underline">Don't have an account? Sign Up</a>
      </div>
    </div>
  );
}
