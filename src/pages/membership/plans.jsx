import { useNavigate } from "react-router-dom";

function Plans() {
  const navigate = useNavigate();

  const choosePlan = (plan, price) => {
    navigate("/payment", {
      state: { plan, price },
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-12">
        Choose Your Membership Plan
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Basic Plan */}
        <div className="bg-white p-8 rounded-xl shadow text-center">
          <h2 className="text-2xl font-bold mb-4">Basic</h2>

          <p className="text-3xl font-bold text-blue-600 mb-4">₹999 / month</p>

          <ul className="text-gray-600 space-y-2 mb-6">
            <li>Gym Access</li>
            <li>Locker Facility</li>
            <li>Basic Equipment</li>
          </ul>

          <button
            onClick={() => choosePlan("Basic", 999)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg"
          >
            Choose Plan
          </button>
        </div>

        {/* Premium Plan */}
        <div className="bg-blue-600 text-white p-8 rounded-xl shadow text-center scale-105">
          <h2 className="text-2xl font-bold mb-4">Premium</h2>

          <p className="text-3xl font-bold mb-4">₹1999 / month</p>

          <ul className="space-y-2 mb-6">
            <li>Full Gym Access</li>
            <li>Personal Trainer</li>
            <li>Diet Plan</li>
          </ul>

          <button
            onClick={() => choosePlan("Premium", 1999)}
            className="bg-white text-blue-600 px-6 py-2 rounded-lg"
          >
            Choose Plan
          </button>
        </div>

        {/* Elite Plan */}
        <div className="bg-white p-8 rounded-xl shadow text-center">
          <h2 className="text-2xl font-bold mb-4">Elite</h2>

          <p className="text-3xl font-bold text-blue-600 mb-4">₹2999 / month</p>

          <ul className="text-gray-600 space-y-2 mb-6">
            <li>Trainer + Diet Plan</li>
            <li>Premium Equipment</li>
            <li>Priority Support</li>
          </ul>

          <button
            onClick={() => choosePlan("Elite", 2999)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg"
          >
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  );
}

export default Plans;
