import "./App.css";
import React from 'react';
import Profile from "./components/Profile";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "react-toastify/dist/ReactToastify.min.css";
import Snowfall from "react-snowfall";

function App() {
  return (
    <React.Fragment>
      <div  className="snow-fall-customise" >
        <Snowfall color = {"#ff5722"}/>
      </div>
      <Profile />
    </React.Fragment>
  );
}

export default App;
