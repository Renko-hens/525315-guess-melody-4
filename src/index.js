import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import questions from "./mocks/questions.js";

const init = () => {
  const Settings = {
    ERRORS_COUNT: 3
  };

  ReactDOM.render(
      <App
        errorCount={Settings.ERRORS_COUNT}
        questions={questions}
      />,
      document.querySelector(`#root`)
  );
};

init();
