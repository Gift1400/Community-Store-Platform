import './about.css'

const story = [
  {
    title: 'Idea',
    text: 'Commu Store was created to give our community a dedicated space to exchange resources and essential products.',
  },
  {
    title: 'Development',
    text: 'We are building code-based solutions to the specific technical problems our community faces.',
  },
  {
    title: 'Vision',
    text: 'We envision a connected community that uses sustainable practices to build a stronger, more circular campus economy.',
  },
]

export default function OurStory() {
  return (
    <section className="about-section">
      <h2>Our story</h2>
      <ol className="about-story">
        {story.map((s) => (
          <li key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}