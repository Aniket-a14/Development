import React, {useContext}from 'react'
import Component from './Component'
import { counterContext } from '../Context/context'

const Button = () => {
    const value = useContext(counterContext)
  return (
    <div>
      <button onClick={() => value.setCount((count) => count + 1)}><span><Component/></span>I am a button</button>
    </div>
  )
}

export default Button
