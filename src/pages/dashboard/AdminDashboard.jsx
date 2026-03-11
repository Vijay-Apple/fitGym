import React from "react";

function AdminDashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Total Members</h2>
          <p className="text-3xl font-bold">120</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Total Trainers</h2>
          <p className="text-3xl font-bold">8</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Monthly Revenue</h2>
          <p className="text-3xl font-bold">₹45,000</p>
        </div>
      </div>

      <div className="mt-10 bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Recent Members</h2>

        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="p-2">Name</th>
              <th>Email</th>
              <th>Plan</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="p-2">Rahul</td>
              <td>rahul@gmail.com</td>
              <td>Premium</td>
            </tr>

            <tr className="border-b">
              <td className="p-2">Amit</td>
              <td>amit@gmail.com</td>
              <td>Basic</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboard;
