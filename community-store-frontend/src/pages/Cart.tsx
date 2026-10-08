import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { cartApi, cartItemApi } from '../api/cartApi'
import { productApi } from '../api/productApi'
import type { Cart, CartItem as CartItemData } from '../types/cart'
import { CURRENT_BUYER_ID } from '../utils/currentBuyer'
import CheckoutSteps from '../components/checkout/CheckoutSteps'
import CartItem from '../components/checkout/CartItem'
import '../components/checkout/checkout.css'

type View =
  | { status: 'loading' }
  | { status: 'error' }
  | {
      status: 'ready'
      cart: Cart | null
      items: CartItemData[]
      names: Record<number, string>
    }

type Notice = { kind: 'ok' | 'error'; text: string }

const rand = (amount: number) => `R${amount.toFixed(2)}`

// The backend cart item only holds a product id, so fetch the names.
async function loadNames(items: CartItemData[]) {
  const ids = [...new Set(items.map((i) => i.productId))]
  const entries = await Promise.all(
    ids.map(async (id): Promise<[number, string]> => {
      try {
        const product = await productApi.getById(id)
        return [id, product.productName]
      } catch {
        return [id, `Product #${id}`]
      }
    }),
  )
  return Object.fromEntries(entries) as Record<number, string>
}

export default function CartPage() {
  const navigate = useNavigate()
  const [view, setView] = useState<View>({ status: 'loading' })
  const [busyId, setBusyId] = useState<number | null>(null)
  const [notice, setNotice] = useState<Notice | null>(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const carts = await cartApi.getByBuyer(CURRENT_BUYER_ID)
        if (carts.length === 0) {
          if (!cancelled) {
            setView({ status: 'ready', cart: null, items: [], names: {} })
          }
          return
        }
        // A buyer can have several carts; use the newest one.
        const cart = carts.reduce((a, b) => (b.cartId > a.cartId ? b : a))
        const items = await cartItemApi.getByCart(cart.cartId)
        const names = await loadNames(items)
        if (!cancelled) setView({ status: 'ready', cart, items, names })
      } catch {
        if (!cancelled) setView({ status: 'error' })
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [])

  function updateItems(change: (items: CartItemData[]) => CartItemData[]) {
    setView((v) => (v.status === 'ready' ? { ...v, items: change(v.items) } : v))
  }

  function nameOf(item: CartItemData) {
    return view.status === 'ready'
      ? (view.names[item.productId] ?? `Product #${item.productId}`)
      : 'Item'
  }

  async function changeQuantity(item: CartItemData, quantity: number) {
    setBusyId(item.cartItemId)
    setNotice(null)
    try {
      await cartItemApi.update({
        cartItemId: item.cartItemId,
        cartId: item.cartId,
        productId: item.productId,
        quantity,
        price: item.price,
      })
      updateItems((list) =>
        list.map((i) =>
          i.cartItemId === item.cartItemId ? { ...i, quantity } : i,
        ),
      )
      setNotice({ kind: 'ok', text: 'Quantity updated.' })
    } catch {
      setNotice({
        kind: 'error',
        text: "Couldn't update the quantity. Please try again.",
      })
    } finally {
      setBusyId(null)
    }
  }

  async function removeItem(item: CartItemData) {
    setBusyId(item.cartItemId)
    setNotice(null)
    try {
      const removed = await cartItemApi.remove(item.cartItemId)
      if (!removed) throw new Error('Item was not removed')
      updateItems((list) =>
        list.filter((i) => i.cartItemId !== item.cartItemId),
      )
      setNotice({ kind: 'ok', text: `${nameOf(item)} removed from your cart.` })
    } catch {
      setNotice({
        kind: 'error',
        text: "Couldn't remove the item. Please try again.",
      })
    } finally {
      setBusyId(null)
    }
  }

  let content
  if (view.status === 'loading') {
    content = <div className="checkout-state">Loading your cart…</div>
  } else if (view.status === 'error') {
    content = (
      <div className="checkout-state checkout-state--error">
        Couldn't load your cart. Please try again.
      </div>
    )
  } else if (!view.cart || view.items.length === 0) {
    content = (
      <div className="checkout-empty">
        <p>Your cart is empty.</p>
        <p>Find something you like in the store.</p>
        <Link to="/store" className="checkout-btn">
          Browse the store
        </Link>
      </div>
    )
  } else {
    const cart = view.cart
    const itemCount = view.items.reduce((n, i) => n + i.quantity, 0)
    const subtotal = view.items.reduce((s, i) => s + i.price * i.quantity, 0)

    content = (
      <div className="checkout-layout">
        <ul className="checkout-list">
          {view.items.map((item) => (
            <CartItem
              key={item.cartItemId}
              item={item}
              name={nameOf(item)}
              busy={busyId === item.cartItemId}
              onQuantityChange={changeQuantity}
              onRemove={removeItem}
            />
          ))}
        </ul>

        <aside className="checkout-summary">
          <h2>Order summary</h2>
          <div className="checkout-summary__row">
            <span>Items</span>
            <span>{itemCount}</span>
          </div>
          <div className="checkout-summary__row">
            <span>Subtotal</span>
            <span>{rand(subtotal)}</span>
          </div>
          <div className="checkout-summary__row checkout-summary__row--total">
            <span>Total</span>
            <span>{rand(subtotal)}</span>
          </div>

          <button
            type="button"
            className="checkout-btn"
            onClick={() =>
              navigate('/payment', {
                state: { cartId: cart.cartId, total: subtotal },
              })
            }
          >
            Continue to payment
          </button>
          <Link to="/store" className="checkout-btn checkout-btn--ghost">
            Continue shopping
          </Link>
        </aside>
      </div>
    )
  }

  return (
    <div className="checkout-page">
      <h1>Your cart</h1>
      <CheckoutSteps current={1} />

      {notice && (
        <p
          className={`checkout-msg ${notice.kind === 'error' ? 'checkout-msg--error' : ''}`}
          role="status"
        >
          {notice.text}
        </p>
      )}

      {content}
    </div>
  )
}