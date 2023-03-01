import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CheckOut from "./Checkout";

function App() {
  return (
    // BEM
    <Router>
    <div className="app">
      <Routes>
      <Route path="/" element={[<Header />, <Home />]}/>
        <Route path="/checkout" element={[<Header />, <CheckOut />]}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
