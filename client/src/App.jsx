import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import BreastCancerDetection from "./components/Breastcancer";
import SignupForm from "./components/Register";
import Login from "./components/Login";
import AllReports from "@/components/kunal_components/AllReports";
import PatientDetails from "./components/kunal_components/PatientDetails";
import SideBar from "./components/kunal_components/SideBar";
import ForgotPassword from "./components/forgotpassword";
import ResetPassword from "./components/restpassword";
import { AuthProvider, useAuth } from "./components/auth";
import FibroidDetection from "./components/FibroidDetection";
import DetectionSelection from "./components/Selction";
import FAQ from "./components/Faq";
import ResultFrames from "./components/ResultFrames";
import PCOSDETECTION from "./components/PCOSdetection";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn, loading } = useAuth();
  const name = sessionStorage.getItem('loggedInuser')


  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        Loading...
      </div>
    );
  }

  if (!isLoggedIn || !name) {
    return <Navigate to="/login" replace />;
  }


  return children;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="bg-black min-h-screen min-w-full text-white flex flex-col">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <SideBar />
                </ProtectedRoute>
              }
            />
            <Route
              path="/breast-cancer"
              element={
                <ProtectedRoute>
                  <BreastCancerDetection />
                </ProtectedRoute>
              }
            />
              <Route
              path="/fibroids-detection"
              element={
                <ProtectedRoute>
                  <FibroidDetection />
                </ProtectedRoute>
              }
            />
            <Route
              path="/pcos-detection"
              element={
                <ProtectedRoute>
                  <PCOSDETECTION />
                </ProtectedRoute>
              }
            />
              <Route
              path="/"
              element={
                <ProtectedRoute>
                  <DetectionSelection/>
                </ProtectedRoute>
              }
            />
            <Route
              path="/all-reports"
              element={
                <ProtectedRoute>
                  <AllReports />
                </ProtectedRoute>
              }
            />
            <Route
              path="/details"
              element={
                <ProtectedRoute>
                  <PatientDetails />
                </ProtectedRoute>
              }
            />
            <Route
              path="/faq"
              element={
                <ProtectedRoute>
                  <FAQ/>
                </ProtectedRoute>
              }
            />
              <Route
              path="/analyze-frames"
              element={
                <ProtectedRoute>
                  <ResultFrames/>
                </ProtectedRoute>
              }
            />
           
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;