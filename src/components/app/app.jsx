import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import PropTypes from "prop-types";

const welcomeButtonClickHandler = () => {};

const App = (props) => {
  const {errorCount} = props;

  return (
    <WelcomeScreen
      errorCount={errorCount}
      buttonClickHandler = {welcomeButtonClickHandler}
    />
  );
};

App.propTypes = {
  errorCount: PropTypes.number.isRequired,
};

export default App;
