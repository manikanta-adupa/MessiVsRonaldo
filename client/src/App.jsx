import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import VotingPage from './pages/VotingPage'
import NavBar from './components/Layout/NavBar'

function App() {

  return (
    <>
      <NavBar />
      <div className="container-fluid mt-3">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/voting' element={<VotingPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
