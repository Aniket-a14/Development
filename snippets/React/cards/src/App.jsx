import { useState, useEffect } from 'react'
import './App.css'
import {ElasticSlider} from './blocks/Components/ElasticSlider/ElasticSlider.jsx'

function App() {
  const [card, setcard] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setcard(data))
  })

  return (
    <>
      <ElasticSlider />
      {card.map((item) => {
        return (
          <div key={item.id}>
            <div className='text-xl font-bold mb-2'>{item.title}</div>
            <div className='text-gray-600'>{item.body}</div>
          </div>
        )
      })}
    </>
  )
}

export default App
