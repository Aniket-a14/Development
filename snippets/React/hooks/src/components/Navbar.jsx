import React from 'react'
import { useEffect } from 'react'

const Navbar = () => {

    useEffect(() => {
        alert("I am clicked")
    }, [])
    
  return (
    <div>
      Hey the lo
    </div>
  )
}

export default Navbar
