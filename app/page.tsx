// File: app/page.tsx (Homepage for Nirdist)
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <header className="flex items-center justify-between p-6 bg-white shadow-md">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Nirdist Logo" className="h-10 w-10" />
          <h1 className="text-xl font-bold">Nirdist</h1>
        </div>
        <nav className="space-x-4">
          <Link href="/products" className="hover:underline">Products</Link>
          <Link href="/cart" className="hover:underline">Cart</Link>
          <Link href="/login" className="hover:underline">Login</Link>
        </nav>
      </header>

      <section className="text-center py-16 px-4 bg-gradient-to-br from-orange-300 to-blue-300">
        <h2 className="text-4xl font-bold mb-4">Nepal’s Trusted Online Marketplace</h2>
        <p className="text-lg mb-6">Shop electronics, clothes, groceries and more. Cash on delivery, eSewa & Khalti accepted.</p>
        <Button className="text-white bg-blue-600 hover:bg-blue-700 rounded-xl px-6 py-3">Start Shopping</Button>
      </section>

      <section className="py-12 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 border rounded-lg text-center shadow">
          <h3 className="text-xl font-semibold">Electronics</h3>
          <p>Mobiles, laptops, accessories</p>
        </div>
        <div className="p-4 border rounded-lg text-center shadow">
          <h3 className="text-xl font-semibold">Fashion</h3>
          <p>Men & Women’s clothing, shoes</p>
        </div>
        <div className="p-4 border rounded-lg text-center shadow">
          <h3 className="text-xl font-semibold">Groceries</h3>
          <p>Daily essentials delivered fast</p>
        </div>
      </section>

      <footer className="p-6 text-center text-gray-600 text-sm border-t">
        © 2025 Nirdist Pvt. Ltd. | Made in Nepal 🇳🇵
      </footer>
    </main>
  );
}
