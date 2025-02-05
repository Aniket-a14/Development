import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      Navbar
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </div>
  )
}

export default Navbar
