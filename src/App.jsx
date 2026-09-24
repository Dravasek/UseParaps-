import { Route,  Routes } from 'react-router-dom'
import Home from './Pages/home'
import Header from './components/header'
import Aboute from './components/aboute'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route  path='/product/aboute/:id' element={<Aboute />}/>
``      </Routes>
    </div>
  )
}

export default App