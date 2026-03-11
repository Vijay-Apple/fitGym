import React from "react";

function TrainerDashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Trainer Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Total Members</h2>
          <p className="text-3xl font-bold">25</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Sessions Today</h2>
          <p className="text-3xl font-bold">5</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Earnings</h2>
          <p className="text-3xl font-bold">₹12,000</p>
        </div>
      </div>

      <div className="mt-10 bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Assigned Members</h2>

        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="p-2">Name</th>
              <th>Goal</th>
              <th>Plan</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="p-2">Rahul</td>
              <td>Weight Loss</td>
              <td>Premium</td>
            </tr>

            <tr className="border-b">
              <td className="p-2">Amit</td>
              <td>Muscle Gain</td>
              <td>Trainer Plan</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TrainerDashboard;
