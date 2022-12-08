import React, { Component } from "react";
import "./App.css";
import Notifier from "./components/Notifier";
import ClCamera from "./components/ClCamera";

class App extends Component {
  constructor() {
    super();
    this.state = {
      offline: false,
    };
  }

  componentDidMount() {
    window.addEventListener("online", () => {
      this.setState({ offline: false });
    });

    window.addEventListener("offline", () => {
      this.setState({ offline: true });
    });
  }

  componentDidUpdate() {
    let offlineStatus = !navigator.onLine;
    if (this.state.offline !== offlineStatus) {
      this.setState({ offline: offlineStatus });
    }
  }

  render() {
    const handleImage = () => {
      return new Promise(async (resolve, reject) => {
        const filePicker = document.querySelector("input");

        if (!filePicker || !filePicker.files || filePicker.files.length <= 0) {
          reject("No file selected.");
          return;
        }
        const myFile = filePicker.files[0];
        console.log(myFile);

        resolve();
      });
    };

    return (
      <div className="App">
        <Notifier offline={this.state.offline} />
        <input
          type="file"
          accept="image/x-png,image/jpeg,image/gif"
          onChange={() => handleImage()}
          className="margin-v-20"
        />

        <ClCamera offline={this.state.offline} />
      </div>
    );
  }
}

export default App;
