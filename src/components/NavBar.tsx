'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CustomButton } from '@/components/CustomButton'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="sticky top-0 z-50 bg-white w-full">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 text-lg">
        <div className="flex items-center justify-between font-mono py-4 w-full">
          <Link href="/" className="flex text-2xl font-bold items-center space-x-2">
            AI Scaler
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="hover:text-[#4027ff]">Data Center</Link>
            <Link href="#" className="hover:text-[#4027ff]">Company</Link>
            <Link href="#" className="hover:text-[#4027ff]">Resources</Link>
            <Link href="/pricing" className="hover:text-[#4027ff]">Pricing</Link>
            <Link href="/bootcamp" className="hover:text-[#4027ff]">Bootcamp</Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#">Login</Link>
            <CustomButton variant="primary">Create account</CustomButton>
          </div>

          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 w-full h-full">
            <div className="flex flex-col items-center space-y-4">
              <Link href="#" className="hover:text-[#4027ff]">Data Center</Link>
              <Link href="#" className="hover:text-[#4027ff]">Company</Link>
              <Link href="#" className="hover:text-[#4027ff]">Resources</Link>
              <Link href="/bootcamp" className="hover:text-[#4027ff]">Bootcamp</Link>
              <Link href="/#">Login</Link>
              <CustomButton variant="primary">Create account</CustomButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

