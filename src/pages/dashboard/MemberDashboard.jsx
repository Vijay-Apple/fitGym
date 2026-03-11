import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMemberData } from "../../redux/memberSlice";
import { useNavigate } from "react-router-dom";

function MemberDashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { member, status } = useSelector((state) => state.member);
  const auth = useSelector((state) => state.auth); // authSlice has logged-in user

  useEffect(() => {
    if (!auth.user) return navigate("/login");
    dispatch(fetchMemberData(auth.user.id));
  }, [auth.user.dispatch, navigate]);

  if (status === "loading") return <div>Loading...</div>;

  if (!member) return <div>No member data found.</div>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome, {member.name} 👋</h1>
        <p className="text-gray-500">Here’s your gym overview for today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-gray-500">Membership Plan</h2>
          <p className="text-2xl font-bold">
            {member.role === "member" ? "Premium" : "-"}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-gray-500">Trainer Assigned</h2>
          <p className="text-2xl font-bold">{member.trainer || "John"}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-gray-500">Membership Expiry</h2>
          <p className="text-2xl font-bold">30 June 2026</p>
        </div>
      </div>

      <div className="mt-10 bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Workout Progress</h2>
        <div className="w-full bg-gray-200 rounded-full h-6">
          <div
            className="bg-green-500 h-6 rounded-full text-white flex items-center justify-center font-semibold"
            style={{ width: `${member.progress}%` }}
          >
            {member.progress}%
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Workout Schedule</h2>
        <ul className="space-y-2">
          <li className="border p-3 rounded hover:bg-gray-50 transition">
            Monday - Chest Workout
          </li>
          <li className="border p-3 rounded hover:bg-gray-50 transition">
            Tuesday - Back Workout
          </li>
          <li className="border p-3 rounded hover:bg-gray-50 transition">
            Wednesday - Cardio
          </li>
        </ul>
      </div>

      <div className="mt-6 bg-white p-6 rounded-xl shadow flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold mb-1">Next Session</h2>
          <p className="text-gray-500">{member.nextSession}</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          View Details
        </button>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <button
          className="bg-purple-600 text-white p-4 rounded-xl shadow hover:bg-purple-700 transition"
          onClick={() => navigate("/chat")}
        >
          Chat with Trainer
        </button>
        <button
          className="bg-green-600 text-white p-4 rounded-xl shadow hover:bg-green-700 transition"
          onClick={() => navigate("/payment")}
        >
          Make Payment
        </button>
        <button
          className="bg-orange-500 text-white p-4 rounded-xl shadow hover:bg-orange-600 transition"
          onClick={() => navigate("/plans")}
        >
          View Plans
        </button>
      </div>
    </div>
  );
}

export default MemberDashboard;
