import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from "./Sidebar";
import Home from "./Home";
import { useState } from "react";
import "./App.css";
import "./styles.css";
import Footer from "./Footer";

function App() {
  const [toggle, setToggle] = useState(false);

  const Toggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="min-vh-100 d-flex flex-column">
      <div className="row flex-grow-1">
        {toggle && (
          <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
            <Sidebar />
          </div>
        )}
        {toggle && <div className="col-4 col-md-2"></div>}
        <div className="col d-flex flex-column">
          <Home Toggle={Toggle} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
