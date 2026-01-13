import { Routes, Route } from 'react-router-dom'
import './App.css'
import CheckoutPage from './pages/checkout/CheckoutPage'
import OrdersPage from './pages/OrdersPage'
import TrackingPage from './pages/TrackingPage'
import HomePage from './pages/HomePage'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />}></Route>
      <Route path='/checkout' element={<CheckoutPage />} />
      <Route path='/orders' element={<OrdersPage />} />
      <Route path='/tracking' element={<TrackingPage />} />
    </Routes>
  )
}

export default App
