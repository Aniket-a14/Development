import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card'>
      <img src="https://media.istockphoto.com/id/636379014/photo/hands-forming-a-heart-shape-with-sunset-silhouette.jpg?s=612x612&w=0&k=20&c=CgjWWGEasjgwia2VT7ufXa10azba2HXmUDe96wZG8F0=" alt="" />
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  )
}

export default Card
