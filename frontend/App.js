import { Routes, Route } from "react-router-dom";
import "./App.css";
import { createContext } from "react";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Services from "./Routes/Services";
import Team from "./Routes/Team";
import Pricing from "./Routes/Pricing";
import Contact from "./Routes/Contact";
import Product from "./Routes/Product";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export const headerContext = createContext();

function App() {
  function sendVal(x) {
    console.log("Data sent to child");
    console.log(x);
  }
  return (
    <div>
      <Header val={sendVal} />

      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/services" element={<Services />} exact />
        <Route path="/product" element={<Product />} exact />
        <Route path="/team" element={<Team />} exact />
        <Route path="/pricing" element={<Pricing />} exact />
        <Route path="/contact" element={<Contact />} exact />
      </Routes>
      <Footer data="Created By AnshuNarayan | All Rights Reserved!" />
    </div>
  );
}

export default App;
