import { Link } from "react-router-dom";

function Sidebar({ role }) {
  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-5">
      <h2 className="text-2xl font-bold mb-10">Gym Panel</h2>

      <ul className="space-y-4">
        {role === "admin" && (
          <>
            <li>
              <Link to="/admin" className="hover:text-gray-300">
                Dashboard
              </Link>
            </li>

            <li>
              <Link to="/members">Members</Link>
            </li>

            <li>
              <Link to="/trainers">Trainers</Link>
            </li>

            <li>
              <Link to="/payments">Payments</Link>
            </li>
          </>
        )}

        {role === "trainer" && (
          <>
            <li>
              <Link to="/trainer">Dashboard</Link>
            </li>

            <li>
              <Link to="/my-members">My Members</Link>
            </li>

            <li>
              <Link to="/chat">Chat</Link>
            </li>
          </>
        )}

        {role === "member" && (
          <>
            <li>
              <Link to="/member">Dashboard</Link>
            </li>

            <li>
              <Link to="/plans">Membership</Link>
            </li>

            <li>
              <Link to="/chat">Chat</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Sidebar;
