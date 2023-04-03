import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./styles/style.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <div className="div-styled">
        <Link to="/" className="link-styled">
          Home
        </Link>
      </div>
      <div className="div-styled">
        <Link to="/about" className="link-styled">
          About
        </Link>
      </div>
    </BrowserRouter>
  );
}

export default App;
