import { Route,  Routes } from 'react-router-dom'
import Home from './Pages/home'
import Header from './components/header'
import Aboute from './components/aboute'
import CardDetail from './components/cardDetail'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route  path='/aboute' element={<Aboute />}/>
        <Route  path='/product/datail/:id' element={<CardDetail />}/>
        <Route />
      </Routes>
    </div>
  )
}

export default App