import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./Home.css";
import Coming from "./coming.jsx";
import Swati from "./Swati.jsx"
import Karan from "./Karan.jsx"
import Darshan from "./Darshan.jsx";
import Vishal from "./Vishal.jsx";
import App from "./App.jsx";
import Home from "./Home.jsx";
import Login from "./Login.jsx"




createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/app" element={<App />} />
        <Route path="/darshan" element={<Darshan />} />
        <Route path= "/karan" element={<Karan />} />
        <Route path= "/swati" element={<Swati/>} />
        <Route path= "/coming" element={<Coming/>} />
        <Route path= "/vishal" element={<Vishal/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
