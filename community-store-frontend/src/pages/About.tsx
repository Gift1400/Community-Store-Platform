import OurStory from '../components/about/OurStory'
import OurValues from '../components/about/OurValues'
import '../components/about/about.css'

export default function About() {
  return (
    <>
      <section className="about-hero">
        <h1>About Us</h1>
        <h2>Our mission and the CPUT community</h2>
        <p>
          Born out of a desire to create a trusted, local marketplace within the
          Cape Peninsula University of Technology, Commu Store empowers students
          to buy, sell and connect. We are a student-led initiative building a
          sustainable campus economy where resources are shared responsibly.
        </p>
      </section>

      <OurStory />
      <OurValues />
    </>
  )
}