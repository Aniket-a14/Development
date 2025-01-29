import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"

function App() {

  return (
    <>
      <Navbar/>
      <div className="cards">
        <Card title="Card 1 title" desc="Card 1 desc"/>
        <Card title="Card 2 title" desc="Card 2 desc"/>
        <Card title="Card 3 title" desc="Card 3 desc"/>
        <Card title="Card 4 title" desc="Card 4 desc"/>
      </div>
      <Footer/>
    </>
  )
}

export default App
