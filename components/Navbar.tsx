import React from 'react'

function Navbar() {
  return (
    <nav
    className='flex pt-5 pb-4 shadow'>
        {/* Logo */}
        <a href='/' className='font-bold ml-5 mr-auto'>Sales management</a>
        <div className='mr-5 space-x-5'>
            <a href="/">Home</a>
            <a href="/sales">Sales</a>
            <a href="/inventory">Inventory</a>
            <a href="/analytics">Analytics</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </div>
    </nav>
  )
}

export default Navbar
