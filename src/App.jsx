<<<<<<< HEAD
import "./styles/reset.css";
import "./styles/App.css";
import "./styles/Home.css";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min.js";
import { useState } from "react";

import Order from "./Order.jsx";
import Success from "./Success.jsx";
import Home from "./Home.jsx";

const initialForm = {
  pizzaSize: "",
  pizzaDoughThickness: "",
  choosenExtras: [],
  userName: "",
  userNote: "",
  pizzaCounter: 1,
};

const App = () => {
  const [form, setForm] = useState(initialForm);
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/order">
        <Order form={form} setForm={setForm} initialForm={initialForm} />
      </Route>
      <Route path="/success">
        <Success form={form} />
      </Route>
    </Switch>
  );
};

export default App;
=======
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
>>>>>>> b49ece52e78d8be4ce868683354340aa59202c8a
