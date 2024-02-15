import { useState } from "react";
import "./App.css";

import { Navbar } from "./my-components/common/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { OpenRoute } from "./my-components/common/OpenRoute";
import { Signup } from "./pages/Signup";

function App() {

  return (
    <div className="w-screen overflow-x-hidden min-h-screen h-fit ">
      <div>
        <Navbar />
      </div>
      <>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/login"
            element={
              <OpenRoute>
                <Login />
              </OpenRoute>
            }
          />

          <Route
            path="/signup"
            element={
              <OpenRoute>
                <Signup />
              </OpenRoute>
            }
          />
        </Routes>
      </>
    </div>
  );
}

export default App;
