import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Pages */
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

/* Layout */
import DashboardLayout from "./layout/DashboardLayout";

/* Dashboards */
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import MemberDashboard from "./pages/dashboard/MemberDashboard";
import TrainerDashboard from "./pages/dashboard/TrainerDashboard";

/* Features */
import ChatPage from "./pages/chat/ChatPage";
import Plans from "./pages/membership/plans";
import PaymentPage from "./pages/payment/PaymentPage";

/* Protected */
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  // get logged in user
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?._id;

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <DashboardLayout role="admin">
                <AdminDashboard />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        {/* Member */}
        <Route
          path="/member"
          element={
            <ProtectedRoute role="member">
              <DashboardLayout role="member">
                <MemberDashboard />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        {/* Trainer */}
        <Route
          path="/trainer"
          element={
            <ProtectedRoute role="trainer">
              <DashboardLayout role="trainer">
                <TrainerDashboard />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        {/* Chat */}
        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <ChatPage userId={userId} />
            </ProtectedRoute>
          }
        />

        {/* Features */}
        <Route path="/plans" element={<Plans />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
