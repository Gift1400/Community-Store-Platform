import { useState } from 'react'
import './newsletter.css'

// UI only: the backend has no newsletter endpoint yet,
// so nothing is sent or saved when the form is submitted.
export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="newsletter">
      <div>
        <h2>Get new listings in your inbox</h2>
        <p>Updates about new products in the store.</p>
      </div>

      <form
        className="newsletter__form"
        onSubmit={(event) => {
          event.preventDefault()
          setSubmitted(true)
        }}
      >
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          aria-label="Email address"
          required
        />
        <button type="submit">Subscribe</button>
      </form>

      {submitted && (
        <p className="newsletter__note" role="status">
          Sign-up isn't live yet, so we haven't saved your email.
        </p>
      )}
    </section>
  )
}