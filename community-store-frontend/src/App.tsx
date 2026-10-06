
import { Navigate, Route, Routes } from 'react-router-dom'

import Store from './pages/Store'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Payment from './pages/Payment'
import Delivery from './pages/Delivery'

function App() {
  return (
    <Routes>

      {/* Temporary home redirect */}
      <Route
        path="/"
        element={<Navigate to="/profile" replace />}
      />

      {/* Store */}
      <Route
        path="/store"
        element={<Store />}
      />

      {/* Product Details */}
      <Route
        path="/products/:id"
        element={<ProductDetails />}
      />

      {/* Cart */}
      <Route
        path="/cart"
        element={<Cart />}
      />

      {/* Payment */}
      <Route
        path="/payment"
        element={<Payment />}
      />

      {/* Delivery */}
      <Route
        path="/delivery"
        element={<Delivery />}
      />

    </Routes>
  )
}

export default App