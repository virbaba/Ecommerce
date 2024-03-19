import React from "react";

import { Routes, Route } from "react-router-dom";

import CustomerRoutes from "./Routers/CustomerRoutes";

function App() {
  return (
    <div>
      <Routes>
        {/* Routing at Client Side */}
        <Route path="*" element={<CustomerRoutes />}></Route>
      </Routes>
    </div>
  );
}

export default App;
