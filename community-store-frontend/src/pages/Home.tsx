import { Link } from 'react-router-dom'
import Hero from '../components/home/Hero'
import FeaturedProducts from '../components/home/FeaturedProducts'
import HowItWorks from '../components/home/HowItWorks'
import Newsletter from '../components/Newsletter'
import '../components/home/home.css'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <HowItWorks />

      <section className="home-about">
        <div>
          <h2>Built by students, for the CPUT community</h2>
          <p>
            Helping local businesses find the light in selling their products
            to individuals in need.
          </p>
        </div>
        <Link to="/about" className="home-btn home-btn--solid">
          About Us
        </Link>
      </section>

      <Newsletter />
    </>
  )
}