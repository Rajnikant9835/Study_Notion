import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Dashboard } from "./pages/Dashboard";
import { useState } from "react";
import { PrivateRoute } from "./Components/PrivateRoute";
function App() {
  // for check login or not use this variables
  const [isLoggedIn, SetisLoggedIn] = useState(false);
  return (
    <div className="w-screen min-h-screen bg-black flex flex-col  ">
      {/* Heading part of app.js  */}
      <Navbar isLoggedIn={isLoggedIn} SetisLoggedIn={SetisLoggedIn} />
      {/* Second part of app.js  */}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/login"
          element={<Login SetisLoggedIn={SetisLoggedIn} />}
        ></Route>
        <Route
          path="/signup"
          element={<Signup SetisLoggedIn={SetisLoggedIn} />}
        ></Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute  isLoggedIn={isLoggedIn}>
              <Dashboard />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
