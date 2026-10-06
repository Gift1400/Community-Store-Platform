import React, { useState } from "react";
import "../styles/checkout.css";

const Payment: React.FC = () => {

  const [paymentMethod, setPaymentMethod] =
    useState("card");

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

          <div className="progress-step active">
            <div className="step-number">2</div>
            <span>Payment</span>
          </div>

          <div className="progress-line"></div>

          <div className="progress-step">
            <div className="step-number">3</div>
            <span>Delivery</span>
          </div>

        </div>

        <div className="payment-layout">

          <section className="payment-section">

            <h2>Payment Method</h2>

            <label className="payment-option">

              <input
                type="radio"
                value="card"
                checked={paymentMethod === "card"}
                onChange={(e) =>
                  setPaymentMethod(e.target.value)
                }
              />

              <span>
                Credit / Debit Card
              </span>

            </label>

            {paymentMethod === "card" && (
              <div className="card-form">

                <label>
                  Cardholder Name
                  <input
                    type="text"
                    placeholder="Enter cardholder name"
                  />
                </label>

                <label>
                  Card Number
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                  />
                </label>

                <div className="card-row">

                  <label>
                    Expiry Date
                    <input
                      type="text"
                      placeholder="MM/YY"
                    />
                  </label>

                  <label>
                    CVV
                    <input
                      type="text"
                      placeholder="CVV"
                    />
                  </label>

                </div>

              </div>
            )}

            <label className="payment-option">

              <input
                type="radio"
                value="eft"
                checked={paymentMethod === "eft"}
                onChange={(e) =>
                  setPaymentMethod(e.target.value)
                }
              />

              <span>
                EFT / Bank Transfer
              </span>

            </label>

            <label className="payment-option">

              <input
                type="radio"
                value="cash"
                checked={paymentMethod === "cash"}
                onChange={(e) =>
                  setPaymentMethod(e.target.value)
                }
              />

              <span>
                Cash on Delivery
              </span>

            </label>

            <div className="payment-actions">

              <a
                href="/cart"
                className="back-button"
              >
                Back
              </a>

              <a
                href="/delivery"
                className="continue-button"
              >
                Continue
              </a>

            </div>

          </section>

          <aside className="checkout-summary">

            <h2>Checkout</h2>

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

export default Payment;