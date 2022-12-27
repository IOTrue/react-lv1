import React from "react";
import "./App.css";
import "./index.css";
import "./Reset.css";
import Header from "./components/Header";
import TodoMain from "./components/TodoMain";

const App = () => {

  return (
    <div className="wrap">
      <Header />
      <TodoMain />
    </div>
  );
};

export default App;
