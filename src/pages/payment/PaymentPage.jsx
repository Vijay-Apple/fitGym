import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function PaymentPage() {
  const auth = useSelector((state) => state.auth);

  const handlePayment = async () => {
    try {
      // 1️⃣ Create order on backend
      const { data: order } = await axios.post(
        "http://localhost:5004/api/payment/order",
        {
          amount: 50000, // Rs 500.00 in paise
        },
      );

      // 2️⃣ Razorpay options
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY,
        amount: order.amount,
        currency: order.currency,
        name: "Gym Management System",
        description: "Membership Payment",
        order_id: order.id,
        prefill: {
          name: auth.user.name,
          email: auth.user.email,
        },
        handler: async function (response) {
          // 3️⃣ Verify payment on backend
          await axios.post("http://localhost:5004/api/payment/verify", {
            order_id: response.razorpay_order_id,
            payment_id: response.razorpay_payment_id,
            signature: response.razorpay_signature,
          });
          alert("Payment successful!");
        },
        theme: { color: "#4F46E5" },
      };

      // 4️⃣ Open Razorpay popup
      const rz = new window.Razorpay(options);
      rz.open();
    } catch (err) {
      console.error(err);
      alert("Payment failed!");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-6">Membership Payment</h2>
        <p className="mb-4">Amount: ₹500</p>
        <button
          onClick={handlePayment}
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}

export default PaymentPage;
