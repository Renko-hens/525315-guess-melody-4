import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import withAudioPlayer from "../../hocs/with-audio-player/with-audio-player.js";

import GameScreen from "../game-screen/game-screen.jsx";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import GuessArtistScreen from "../guess-artist/guess-artist.jsx";
import GuessGenreScreen from "../guess-genre/guess-genre.jsx";
import {GameType} from "../../const.js";

const GuessArtistScreenWrapped = withAudioPlayer(GuessArtistScreen);
const GuessGenreScreenWrapped = withAudioPlayer(GuessGenreScreen);

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: -1
    };
  }

  _renderGameScreen() {
    const {errorCount, questions} = this.props;
    const {step} = this.state;
    const question = questions[step];

    if (step === -1 || step >= questions.length) {
      return (
        <WelcomeScreen
          errorCount={errorCount}
          buttonClickHandler = {() => {
            this.setState({
              step: 0,
            });
          }}
        />
      );
    }

    if (question) {
      switch (question.type) {
        case GameType.ARTIST:
          return (
            <GameScreen
              type={question.type}
            >
              <GuessArtistScreenWrapped
                question={question}
                onAnswer={() => {
                  this.setState((prevState) => ({
                    step: prevState.step + 1,
                  }));
                }}
              />
            </GameScreen>
          );
        case GameType.GENRE:
          return (
            <GameScreen
              type={question.type }
            >
              <GuessGenreScreenWrapped
                question={question}
                onAnswer={() => {
                  this.setState((prevState) => ({
                    step: prevState.step + 1,
                  }));
                }}
              />
            </GameScreen>
          );
      }
    }
    return null;
  }

  render() {
    const {questions} = this.props;

    return (
      <BrowserRouter>
        <Switch>

          <Route exact path="/">
            {this._renderGameScreen()}
          </Route>

          <Route exact path="/dev-artist">
            <GuessArtistScreenWrapped
              onAnswer={() => {}}
              question={questions[0]}
            />
          </Route>

          <Route exact path="/dev-genre">
            <GuessGenreScreenWrapped
              onAnswer={() => {}}
              question={questions[1]}
            />
          </Route>

        </Switch>
      </BrowserRouter>
    );
  }
}


App.propTypes = {
  errorCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

export default App;
