import React, {memo} from 'react'

const Navbar = ({adj, getadj}) => {
  return (
    <div>
      I am a {adj} navbar
      <button onClick={()=>{getadj()}}>{getadj()}Hi</button>
    </div>
  )
}

export default memo(Navbar)
