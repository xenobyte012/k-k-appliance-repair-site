import React from "react";
import Home from "./pages/Home";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="w-full overflow-x-hidden h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
  
      </Routes>
      
    </div>
  );
}

export default App;
