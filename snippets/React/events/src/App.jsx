import { useState } from 'react'
import './App.css'

function App() {
  const [form, setform] = useState({email: "", phone: ""})

  const handleBtn = () => {
    alert('Button Clicked')
  }

  const handleForm = (e) => {
    setform({...form, [e.target.name]: e.target.value}) 
  }
  return (
    <>
      <div className="button">
        <button onClick={handleBtn}>Click Me</button>
      </div>

      <input type="text" name='email' value={form.email} onChange={handleForm}/>
      <input type="text" name='phone' value={form.phone} onChange={handleForm}/>
    </>
  )
}

export default App
