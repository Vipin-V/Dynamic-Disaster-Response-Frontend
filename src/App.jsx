import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import WelcomePage from "./Pages/WelcomePage";
import AdminLoginPage from "./Pages/admin/AdminLoginPage";
import AdminSignup from "./Pages/admin/AdminSignup";
import AdminDashboard from "./Pages/admin/AdminDashboard";
import FamilyDashboard from "./Pages/family/FamilyDashboard";
import FamilySignUp from "./Pages/family/FamilySignUp";
import FamilyLogin from "./Pages/family/FamilyLogin";
import DriverSignupPage from "./Pages/driver/DriverSignup";
import DriverLoginPage from "./Pages/driver/DriverLoginPage";
import DriverDashboard from "./Pages/driver/DriverDashboard";
import VolunteerDashboard from "./Pages/volunteer/VolunteerDashboard";
import CareTaker from "./Pages/caretaker/CareTaker";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/Admin/signup" element={<AdminSignup />} />
          <Route path="/Admin/login" element={<AdminLoginPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/family/signup" element={<FamilySignUp />} />
          <Route path="/family/login" element={<FamilyLogin />} />
          <Route path="/family/dashboard" element={<FamilyDashboard />} />
          <Route path="/driver/signup" element={<DriverSignupPage />} />
          <Route path="/driver/login" element={<DriverLoginPage />} />
          <Route path="/driver/dashboard" element={<DriverDashboard />} />
          <Route path="/volunteer/dashboard" element={<VolunteerDashboard />} />
          <Route path="/caretaker/dashboard" element={<CareTaker />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
