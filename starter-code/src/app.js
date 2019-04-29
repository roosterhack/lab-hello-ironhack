import React from "react";

class App extends React.Component {
  render() {
    const name = "Eddie";
    const el = (
      <h1>
        Yo {name}, {name} has {name.length} letters.
      </h1>
    );
    return el;
  }
}

export default App;
