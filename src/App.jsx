import './App.css'
import BookingWindow from './components/BookingWindow'
import Content from './components/Content'
import Hero from './components/Hero'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Hero />}/>
        <Route path='/content' element={<Content />}/>
        <Route path='/booking' element={<BookingWindow />}/>
      </Routes>
    </>
  )
}

export default App
