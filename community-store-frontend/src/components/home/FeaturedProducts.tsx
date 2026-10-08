import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { productApi } from '../../api/productApi'
import type { Product } from '../../types/product'
import ProductGrid from '../store/ProductGrid'
import '../store/store.css'
import './home.css'

export default function FeaturedProducts() {
  const [state, setState] = useState<{
    products: Product[]
    loading: boolean
    error: string | null
  }>({ products: [], loading: true, error: null })

  useEffect(() => {
    let cancelled = false

    productApi
      .getAll()
      .then((data) => {
        if (!cancelled) {
          setState({ products: data.slice(0, 4), loading: false, error: null })
        }
      })
      .catch(() => {
        if (!cancelled) {
          setState({
            products: [],
            loading: false,
            error: "Couldn't load products. Please try again.",
          })
        }
      })

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section className="home-section">
      <div className="home-section__head">
        <h2>Fresh in the store</h2>
        <Link to="/store" className="home-link">
          See everything
        </Link>
      </div>

      <ProductGrid
        products={state.products}
        loading={state.loading}
        error={state.error}
      />
    </section>
  )
}