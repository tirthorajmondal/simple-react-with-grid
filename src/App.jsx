import AvailableTechnologies from "./components/AvailableTechnologies"
import Banner from "./components/Banner"
import Nav from "./components/Nav"


function App() {

  return (
    <div className=''>
      <Nav />
      <div className="max-w-7xl mx-2 md:mx-auto my-2">
        <Banner />
        <AvailableTechnologies />
      </div>
    </div>
  )
}

export default App
