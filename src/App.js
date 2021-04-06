import React from "react";
import axios from "axios";
import loadingGif from "./images/spinner.gif";

import "./App.css";

class App extends React.Component {
  state = {
    advice: "",
    isLoading: true,
  };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      axios
        .get("https://api.adviceslip.com/advice")
        .then((response) => {
          let { advice } = response.data.slip;
          this.setState({ advice: advice, isLoading: false });
        })
        .catch((error) => {
          console.log(error);
        });
    }, 2000);
  };

  render() {
    const { advice } = this.state;
    return (
      <div className="app">
        <div className="card">
          <h3 className="heading">{advice}</h3>
          <button className="button" onClick={this.fetchAdvice}>
            {this.state.isLoading ? (
              <div class="loader flower-04">
                <div class="loader-container">
                  <div class="petal"></div>
                  <div class="petal"></div>
                  <div class="petal"></div>
                  <div class="petal"></div>
                  <div class="petal"></div>
                  <div class="petal"></div>
                  <div class="petal"></div>
                  <div class="petal"></div>
                  <div class="petal-1"></div>
                  <div class="petal-1"></div>
                  <div class="petal-1"></div>
                </div>
              </div>
            ) : (
              <span>GIVE ME ADVICE!</span>
            )}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
