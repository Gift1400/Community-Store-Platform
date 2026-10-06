import React, { useState } from "react";
import "../styles/checkout.css";

const Delivery: React.FC = () => {

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    street: "",
    city: "",
    province: "",
    postalCode: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    alert("Order placed successfully!");

  };

  return (
    <div className="store-page">

      <header className="store-header">

        <div className="store-logo">
          Commu Store<span>.</span>
        </div>

        <nav className="store-nav">
          <a href="/">Home</a>
          <a href="/store">Store</a>
          <a href="/about">About Us</a>
        </nav>

        <div className="header-icons">
          <span>🔔</span>
          <span>🛒</span>
          <span>Account</span>
        </div>

      </header>

      <div className="checkout-container">

        {/* Progress */}

        <div className="progress-bar">

          <div className="progress-step completed">
            <div className="step-number">✓</div>
            <span>Cart</span>
          </div>

          <div className="progress-line active-line"></div>

          <div className="progress-step completed">
            <div className="step-number">✓</div>
            <span>Payment</span>
          </div>

          <div className="progress-line active-line"></div>

          <div className="progress-step active">
            <div className="step-number">3</div>
            <span>Delivery</span>
          </div>

        </div>

        <div className="delivery-layout">

          <section className="delivery-section">

            <h2>Delivery Information</h2>

            <form onSubmit={handleSubmit}>

              <label>
                Full Name
                <input
                  name="name"
                  type="text"
                  value={address.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </label>

              <label>
                Phone Number
                <input
                  name="phone"
                  type="tel"
                  value={address.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  required
                />
              </label>

              <label>
                Street Address
                <input
                  name="street"
                  type="text"
                  value={address.street}
                  onChange={handleChange}
                  placeholder="Street address"
                  required
                />
              </label>

              <div className="delivery-row">

                <label>
                  City
                  <input
                    name="city"
                    type="text"
                    value={address.city}
                    onChange={handleChange}
                    placeholder="Cape Town"
                    required
                  />
                </label>

                <label>
                  Province
                  <input
                    name="province"
                    type="text"
                    value={address.province}
                    onChange={handleChange}
                    placeholder="Western Cape"
                    required
                  />
                </label>

              </div>

              <label>
                Postal Code
                <input
                  name="postalCode"
                  type="text"
                  value={address.postalCode}
                  onChange={handleChange}
                  placeholder="8001"
                  required
                />
              </label>

              <div className="payment-actions">

                <a
                  href="/payment"
                  className="back-button"
                >
                  Back
                </a>

                <button
                  type="submit"
                  className="continue-button"
                >
                  Place Order
                </button>

              </div>

            </form>

          </section>

          <aside className="checkout-summary">

            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Lenovo IdeaPad 3 ×1</span>
              <span>R7000</span>
            </div>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>R7000</span>
            </div>

            <div className="summary-row">
              <span>Delivery fee</span>
              <span>R100</span>
            </div>

            <div className="summary-total">
              <span>Total</span>
              <strong>R7100</strong>
            </div>

          </aside>

        </div>

      </div>

    </div>
  );
};

export default Delivery;