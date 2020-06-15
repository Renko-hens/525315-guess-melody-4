import React from "react";
import WelcomeScreen from "../welcomeScreen/welcomeScreen.jsx";
import PropTypes from "prop-types";

const App = (props) => {
  const {errorCount} = props;

  return (
    <WelcomeScreen errorCount={errorCount}/>
  );
};

App.propTypes = {
  errorCount: PropTypes.number.isRequired,
};

export default App;
