// SignUp.js
"use client"
import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {  ref, set } from "firebase/database";
import { auth,database } from '@/app/data/firebaseConfig';
import { useRouter } from 'next/navigation';
export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
 const router = useRouter();
  const handleSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Đăng ký thành công
      const user = userCredential.user;
      set(ref(database, 'usersMember/' + user.uid), {
       uid: user.uid,
        username: name,
        email: email,
        type: "user",
        address: address
      });
     router.push("/");
      // Thêm thông tin người dùng vào cơ sở dữ liệu
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // Xử lý lỗi
      // ...
    });
  };

  return (
    <div className="container mx-auto max-w-sm items-center text-gray-600 rounded-xl bg-slate-100 py-32 px-8 mt-8">
      <h1 className="text-2xl font-bold text-center mb-4">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full px-4 py-2 rounded border border-gray-300"
            required
          />
        </div>
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
          <label htmlFor="address" className="block font-medium">Address</label>
          <input
            type="text"
            id="password"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="block w-full px-4 py-2 rounded border border-gray-300"
            required
          />
        </div>
        <div className="mb-4">
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Sign Up</button>
        </div>
      </form>
      <div className="mb-4 text-center">
        <a href="/pages/auth/login" className="text-blue-500 hover:underline">Already have an account? Sign In</a>
      </div>
    </div>
  );
}
