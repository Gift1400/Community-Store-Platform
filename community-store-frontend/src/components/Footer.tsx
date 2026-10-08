import { Link } from 'react-router-dom'
import './site.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div>
          <p className="site-footer__brand">
            <span>Commu</span> Store.
          </p>
          <address>
            PO Box 1863
            <br />
            Cape Town
            <br />
            8001
          </address>
        </div>

        <div>
          <h3>Navigation</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/store">Store</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/profile">Notifications</Link></li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul>
            <li>+27 763 2308</li>
            <li>(011) 240 3119</li>
            <li>commustore@gmail.com</li>
          </ul>
        </div>

        <div>
          <h3>Services</h3>
          <ul>
            <li><Link to="/sell">List a product</Link></li>
            <li><Link to="/store">Buy a product</Link></li>
            <li><Link to="/seller-profile">Sellers</Link></li>
          </ul>
        </div>
      </div>

      <p className="site-footer__legal">
        © Commu Store. Cape Peninsula University of Technology
      </p>
    </footer>
  )
}