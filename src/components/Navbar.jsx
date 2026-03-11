function Navbar() {
  return (
    <div className="bg-white shadow p-4 flex justify-between">
      <h1 className="text-xl font-bold">Gym Management System</h1>

      <div className="flex items-center gap-4">
        <span className="text-gray-600">Welcome User</span>

        <button className="bg-red-500 text-white px-4 py-1 rounded">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
