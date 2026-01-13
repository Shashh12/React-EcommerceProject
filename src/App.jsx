import Home from './pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import CheckoutPage from './pages/CheckoutPage'
import OrdersPage from './pages/OrdersPage'
import TrackingPage from './pages/TrackingPage'

function App() {

  return (
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path='/checkout' element={<CheckoutPage />} />
      <Route path='/orders' element={<OrdersPage />} />
      <Route path='/tracking' element={<TrackingPage />} />
    </Routes>
  )
}

export default App
