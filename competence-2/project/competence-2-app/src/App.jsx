import Header from "./shared/components/Header/Header";
import Footer from "./shared/components/Footer/Footer";

import Jumbotron from "./features/home/Jumbotron/Jumbotron";
import About from "./features/home/About/About";
import Contact from "./features/home/Contact/Contact";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Jumbotron />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
