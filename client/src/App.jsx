import {Welcome, Navbar, Footer, Services, Transactions} from './components'
const App = ()=> {
  return (
    <div className="App">
          {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
          <div className='gradient-bg-welcome'>
              <Navbar/>
              <Welcome/>
          </div>
          <Services/>
          <Transactions/>
          <Footer/>
    </div>
  )
}

export default App
