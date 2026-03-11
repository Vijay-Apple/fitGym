import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Navbar */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-blue-600">FitGym</h1>

          <nav className="hidden md:flex gap-6 text-gray-600">
            <a href="#features" className="hover:text-blue-600">
              Features
            </a>
            <a href="#trainers" className="hover:text-blue-600">
              Trainers
            </a>
            <a href="#pricing" className="hover:text-blue-600">
              Pricing
            </a>
          </nav>

          <div className="flex gap-4">
            <Link to="/login" className="text-blue-600 font-medium">
              Login
            </Link>

            <Link
              to="/register"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Join Now
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 py-24 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              The Smart Way <br /> To Manage Your Gym
            </h2>

            <p className="text-blue-100 text-lg mb-6">
              Manage members, trainers, payments and real-time chat all in one
              powerful platform built for modern gyms.
            </p>

            <div className="flex gap-4">
              <Link
                to="/register"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold"
              >
                Start Free
              </Link>

              <Link
                to="/login"
                className="border border-white px-6 py-3 rounded-lg"
              >
                Login
              </Link>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74"
            alt="gym"
            className="w-full max-w-lg h-80 object-cover rounded-2xl shadow-xl mx-auto"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-4xl font-bold text-blue-600">500+</h3>
          <p className="text-gray-600">Active Members</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-blue-600">30+</h3>
          <p className="text-gray-600">Professional Trainers</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-blue-600">10+</h3>
          <p className="text-gray-600">Years Experience</p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-14">
            Powerful Features
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-8 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-bold mb-3">Member Management</h4>

              <p className="text-gray-600">
                Track memberships, monitor attendance and manage gym members
                easily.
              </p>
            </div>

            <div className="p-8 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-bold mb-3">Real-Time Chat</h4>

              <p className="text-gray-600">
                Trainers and members can communicate instantly through real-time
                messaging.
              </p>
            </div>

            <div className="p-8 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-bold mb-3">Online Payments</h4>

              <p className="text-gray-600">
                Accept membership payments securely using Razorpay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section id="trainers" className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-14">
            Meet Our Trainers
          </h3>

          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="bg-white p-6 rounded-xl shadow">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                className="w-24 h-24 rounded-full mx-auto mb-4"
                alt=""
              />

              <h4 className="font-bold">John Carter</h4>
              <p className="text-gray-500">Strength Coach</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                className="w-24 h-24 rounded-full mx-auto mb-4"
                alt=""
              />

              <h4 className="font-bold">Sophia Lee</h4>
              <p className="text-gray-500">Fitness Trainer</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <img
                src="https://randomuser.me/api/portraits/men/22.jpg"
                className="w-24 h-24 rounded-full mx-auto mb-4"
                alt=""
              />

              <h4 className="font-bold">Mike Johnson</h4>
              <p className="text-gray-500">Bodybuilding Coach</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-14">Membership Plans</h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white shadow p-8 rounded-xl">
              <h4 className="text-xl font-bold mb-3">Basic</h4>
              <p className="text-3xl font-bold text-blue-600 mb-4">₹999</p>
              <p className="text-gray-600 mb-6">Gym access & locker facility</p>
              <Link
                to="/plans"
                className="bg-blue-600 text-white px-5 py-2 rounded"
              >
                View Plan
              </Link>
            </div>

            <div className="bg-blue-600 text-white shadow p-8 rounded-xl scale-105">
              <h4 className="text-xl font-bold mb-3">Premium</h4>
              <p className="text-3xl font-bold mb-4">₹1999</p>
              <p className="mb-6">Personal trainer & diet plan</p>
              <Link
                to="/plans"
                className="bg-white text-blue-600 px-5 py-2 rounded"
              >
                View Plan
              </Link>
            </div>

            <div className="bg-white shadow p-8 rounded-xl">
              <h4 className="text-xl font-bold mb-3">Elite</h4>
              <p className="text-3xl font-bold text-blue-600 mb-4">₹2999</p>
              <p className="text-gray-600 mb-6">Trainer + premium access</p>
              <Link
                to="/plans"
                className="bg-blue-600 text-white px-5 py-2 rounded"
              >
                View Plan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white text-center py-20">
        <h3 className="text-3xl font-bold mb-6">
          Ready To Transform Your Fitness Journey?
        </h3>

        <Link
          to="/register"
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold"
        >
          Join Now
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center py-8">
        <p>© 2026 FitGym. All rights reserved.</p>

        <p className="text-sm text-gray-500 mt-2">
          Built with React, Node.js, Redis, RabbitMQ & Socket.io
        </p>
      </footer>
    </div>
  );
}

export default Home;
