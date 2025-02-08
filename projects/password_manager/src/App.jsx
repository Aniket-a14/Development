import Navbar from './components/Navbar'
import Manage from './components/Manage'
import Background from './components/Background'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <Background/>
      <Navbar/>
      <div className='max-h-[70vh]'>
        <Manage/>
      </div>
      <Footer/>
    </>
  )
}

export default App
