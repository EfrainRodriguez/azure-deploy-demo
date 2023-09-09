import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
      <Routes>
        <Route path="/test" element={<div>test page</div>} />
      </Routes>
      <Routes>
        <Route path="/login" element={<div>login page</div>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
