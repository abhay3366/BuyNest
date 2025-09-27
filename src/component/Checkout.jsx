import React from "react";

const Checkout = () => {
  return (
    <section className="py-10 bg-gray-100 min-h-screen">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8">
        
        {/* Left Column - Billing Details */}
        <div className="lg:w-2/3 bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Billing Details</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Full Name" className="p-3 border rounded-lg col-span-2" />
            <input type="email" placeholder="Email Address" className="p-3 border rounded-lg" />
            <input type="tel" placeholder="Phone Number" className="p-3 border rounded-lg" />
            <input type="text" placeholder="Street Address" className="p-3 border rounded-lg col-span-2" />
            <input type="text" placeholder="City" className="p-3 border rounded-lg" />
            <input type="text" placeholder="State" className="p-3 border rounded-lg" />
            <input type="text" placeholder="Zip Code" className="p-3 border rounded-lg col-span-2" />

            <div className="col-span-2">
              <h3 className="text-lg font-medium mb-2">Payment Method</h3>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="payment" className="accent-indigo-600" />
                  Credit Card
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="payment" className="accent-indigo-600" />
                  PayPal
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="payment" className="accent-indigo-600" />
                  Cash on Delivery
                </label>
              </div>
            </div>
          </form>
        </div>

        {/* Right Column - Order Summary */}
        <div className="lg:w-1/3 bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>

          {/* Product List */}
          <div className="border-b pb-4 mb-4 space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img src="https://via.placeholder.com/60" alt="Product 1" className="w-14 h-14 rounded border" />
                <span>Product 1</span>
              </div>
              <span>₹1200</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img src="https://via.placeholder.com/60" alt="Product 2" className="w-14 h-14 rounded border" />
                <span>Product 2</span>
              </div>
              <span>₹800</span>
            </div>
          </div>

          {/* Price Summary */}
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>₹2000</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>₹100</span>
          </div>
          <div className="flex justify-between font-semibold text-lg mt-2">
            <span>Total</span>
            <span>₹2100</span>
          </div>

          <button className="mt-6 w-full bg-primary cursor-pointer text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition">
            Place Order
          </button>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
