import './home.css'

const steps = [
  {
    title: 'List it',
    text: 'Add a photo, a price and a short description. Your item is in the store in a minute.',
  },
  {
    title: 'Find it',
    text: 'Search the store or browse by category to find what you need from people on campus.',
  },
  {
    title: 'Check out',
    text: 'Add it to your cart, review your order and pay when you are ready.',
  },
]

export default function HowItWorks() {
  return (
    <section className="home-section">
      <h2>How it works</h2>
      <ol className="home-steps">
        {steps.map((s, i) => (
          <li key={s.title}>
            <span className="home-steps__num">{i + 1}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}