import type { CartItem as CartItemData } from '../../types/cart'
import './checkout.css'

const rand = (amount: number) => `R${amount.toFixed(2)}`

interface Props {
  item: CartItemData
  name: string
  busy: boolean
  onQuantityChange: (item: CartItemData, quantity: number) => void
  onRemove: (item: CartItemData) => void
}

export default function CartItem({
  item,
  name,
  busy,
  onQuantityChange,
  onRemove,
}: Props) {
  return (
    <li className="checkout-item">
      <div>
        <p className="checkout-item__name">{name}</p>
        <span className="checkout-item__unit">{rand(item.price)} each</span>
      </div>

      <div className="checkout-qty">
        <button
          type="button"
          aria-label={`Decrease quantity of ${name}`}
          disabled={busy || item.quantity <= 1}
          onClick={() => onQuantityChange(item, item.quantity - 1)}
        >
          −
        </button>
        <span>{item.quantity}</span>
        <button
          type="button"
          aria-label={`Increase quantity of ${name}`}
          disabled={busy}
          onClick={() => onQuantityChange(item, item.quantity + 1)}
        >
          +
        </button>
      </div>

      <span className="checkout-item__total">
        {rand(item.price * item.quantity)}
      </span>

      <button
        type="button"
        className="checkout-remove"
        disabled={busy}
        onClick={() => onRemove(item)}
      >
        Remove
      </button>
    </li>
  )
}