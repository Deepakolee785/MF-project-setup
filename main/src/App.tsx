import React, { lazy, Suspense, useState } from "react";
import { Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
import Nav from "./components/Nav";

const Login = lazy(() => import("components/Login"));
const Register = lazy(() => import("components/Register"));
const Dashboard = lazy(() => import("dashboard/DashboardPage"));
const Button = lazy(() => import("components/Button"));

const App: React.FC = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      <Nav isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
      <Suspense fallback={"Loading"}>
        <Routes>
          <Route
            path="/"
            element={
              <Login
                handleSubmit={() => {
                  navigate(`/dashboard`);
                  setLoggedIn(true);
                }}
              />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />}
          />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
