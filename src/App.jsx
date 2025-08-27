import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PizzaOrder from "./components/PizzaOrder";
function App() {
  return (
    <BrowserRouter>
    <>
      <Routes>
        <Route path="/" element={<PizzaOrder />} />
        <Route path="/success" element={<div>Siparişiniz başarıyla alındı!</div>} />
      </Routes>
    </>
    </BrowserRouter>
  );
}

export default App;