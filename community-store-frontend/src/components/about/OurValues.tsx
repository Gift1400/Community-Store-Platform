import './about.css'

const values = [
  {
    title: 'Trust',
    text: 'We build genuine, reliable relationships through transparency and integrity.',
  },
  {
    title: 'Community',
    text: 'We link people together and foster meaningful connections within our campus.',
  },
  {
    title: 'Sustainability',
    text: 'We promote recycling and sustainable consumption to protect our future.',
  },
]

export default function OurValues() {
  return (
    <section className="about-section about-section--last">
      <h2>Our values</h2>
      <ul className="about-values">
        {values.map((v) => (
          <li key={v.title}>
            <h3>{v.title}</h3>
            <p>{v.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}