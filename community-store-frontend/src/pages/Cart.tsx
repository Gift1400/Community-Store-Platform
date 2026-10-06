import React, { useState } from "react";
import "../styles/checkout.css";

interface CartItem {
  id: number;
  name: string;
  color: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Lenovo IdeaPad 3",
      color: "Silver",
      price: 7000,
      quantity: 1,
      image: "/images/laptop.jpg",
    },
  ]);

  const increaseQuantity = (id: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) =>
      items.filter((item) => item.id !== id)
    );
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const deliveryFee = cartItems.length > 0 ? 100 : 0;

  const total = subtotal + deliveryFee;

  return (
    <div className="store-page">

      {/* Header */}
      <header className="store-header">

        <div className="store-logo">
          Commu Store<span>.</span>
        </div>

        <nav className="store-nav">
          <a href="/">Home</a>
          <a href="/store" className="active">
            Store
          </a>
          <a href="/about">About Us</a>
        </nav>

        <div className="header-icons">
          <span>🔔</span>
          <span>🛒</span>
          <span>Account</span>
        </div>

      </header>

      {/* Checkout Progress */}
      <div className="checkout-container">

        <div className="progress-bar">

          <div className="progress-step active">
            <div className="step-number">1</div>
            <span>Cart</span>
          </div>

          <div className="progress-line"></div>

          <div className="progress-step">
            <div className="step-number">2</div>
            <span>Payment</span>
          </div>

          <div className="progress-line"></div>

          <div className="progress-step">
            <div className="step-number">3</div>
            <span>Delivery</span>
          </div>

        </div>

        {/* Main cart area */}
        <div className="cart-layout">

          <section className="cart-section">

            <h2>My Cart</h2>

            {cartItems.length === 0 ? (
              <div className="empty-cart">
                <h3>Your cart is empty</h3>
                <p>Add products to your cart to continue.</p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div className="cart-item" key={item.id}>

                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-product-image"
                  />

                  <div className="cart-product-info">

                    <div className="product-title-row">
                      <h3>{item.name}</h3>

                      <button className="save-button">
                        ♡ Save
                      </button>
                    </div>

                    <p className="product-color">
                      {item.color}
                    </p>

                    <p className="delivery-info">
                      🛍 Delivery: 2-5 days
                    </p>

                    <p className="free-delivery">
                      🚚 Free return before 30 days
                    </p>

                    <strong>
                      R{(item.price * item.quantity).toFixed(2)}
                    </strong>

                  </div>

                  <div className="quantity-controls">

                    <button
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                    >
                      +
                    </button>

                  </div>

                  <button
                    className="delete-button"
                    onClick={() =>
                      removeItem(item.id)
                    }
                  >
                    🗑
                  </button>

                </div>
              ))
            )}

            <button className="continue-shopping">
              Continue Shopping
            </button>

          </section>

          {/* Checkout Summary */}
          <aside className="checkout-summary">

            <h2>Checkout</h2>

            {cartItems.map((item) => (
              <div
                className="summary-product"
                key={item.id}
              >
                <span>
                  {item.name} ×{item.quantity}
                </span>

                <span>
                  R{(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}

            <div className="summary-row">
              <span>Subtotal</span>
              <span>R{subtotal.toFixed(2)}</span>
            </div>

            <div className="summary-row">
              <span>Delivery fee</span>
              <span>R{deliveryFee.toFixed(2)}</span>
            </div>

            <div className="summary-total">
              <span>Total</span>
              <strong>R{total.toFixed(2)}</strong>
            </div>

            <a href="/payment" className="pay-button">
              Pay
            </a>

          </aside>

        </div>

      </div>

      <Footer />

    </div>
  );
};


/* Footer */

const Footer: React.FC = () => {
  return (
    <footer className="store-footer">

      <div className="footer-column">

        <h3>
          Commu Store<span>.</span>
        </h3>

        <p>PO Box 1863</p>
        <p>Cape Town</p>
        <p>8001</p>

      </div>

      <div className="footer-column">

        <h3>Navigation</h3>

        <a href="/">Home</a>
        <a href="/store">Store</a>
        <a href="/about">About Us</a>

      </div>

      <div className="footer-column">

        <h3>Contact</h3>

        <p>+27 763 2308</p>
        <p>(011) 240 3119</p>
        <p>commustore@gmail.com</p>

        <div className="social-icons">
          <span>◎</span>
          <span>f</span>
          <span>𝕏</span>
        </div>

      </div>

      <div className="footer-column">

        <h3>Services</h3>

        <a href="#">List a product</a>
        <a href="#">Buy a product</a>
        <a href="#">Sellers</a>
        <a href="#">Discount deals</a>

      </div>

      <div className="footer-bottom">
        © Commu Store. - Cape Peninsula University of Technology
      </div>

    </footer>
  );
};

export default Cart;