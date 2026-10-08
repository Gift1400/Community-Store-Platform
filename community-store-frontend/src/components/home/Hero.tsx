import { Link } from 'react-router-dom'
import './home.css'

export default function Hero() {
  return (
    <section className="home-hero">
      <h1>
        <span>Your campus.</span>
        <span>Your community.</span>
        <span>Your marketplace.</span>
      </h1>

      <p>
        Buy, sell and trade with people you trust. Exclusive to students,
        faculty and local neighbours.
      </p>

      <div className="home-hero__actions">
        <Link to="/store" className="home-btn home-btn--light">
          Browse the store
        </Link>
        <Link to="/sell" className="home-btn home-btn--outline">
          Sell an item
        </Link>
      </div>

      {/* Table Mountain silhouette */}
      <svg
        className="home-hero__mountain"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          className="back"
          d="M0 120 L0 70 L260 62 L330 30 L880 30 L950 62 L1200 74 L1200 120 Z"
        />
        <path
          className="front"
          d="M0 120 L0 98 L300 90 L380 66 L820 66 L900 90 L1200 100 L1200 120 Z"
        />
      </svg>
    </section>
  )
}