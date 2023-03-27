import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import React from "react";
import "./components/Component.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <List />
    </React.Fragment>
  );
}

export default App;
