import './checkout.css'

const steps = ['Cart', 'Payment', 'Delivery']

interface Props {
  current: 1 | 2 | 3
}

export default function CheckoutSteps({ current }: Props) {
  return (
    <ol className="checkout-steps" aria-label="Checkout progress">
      {steps.map((label, i) => {
        const number = i + 1
        const state =
          number < current
            ? 'checkout-steps__item--done'
            : number === current
              ? 'checkout-steps__item--current'
              : ''

        return (
          <li
            key={label}
            className={`checkout-steps__item ${state}`}
            aria-current={number === current ? 'step' : undefined}
          >
            <span className="checkout-steps__dot">{number}</span>
            {label}
          </li>
        )
      })}
    </ol>
  )
}