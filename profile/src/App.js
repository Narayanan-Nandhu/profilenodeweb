import "./App.css";
import React from 'react';
import Profile from "./components/Profile";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "react-toastify/dist/ReactToastify.min.css";
import ReactGA from 'react-ga';

ReactGA.initialize(process.env.REACT_APP_TRACKING_ID);

function App() {

  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname, "Landed on App" );
  }, []);

  return (
    <React.Fragment>
      <Profile />
    </React.Fragment>
  );
}

export default App;
