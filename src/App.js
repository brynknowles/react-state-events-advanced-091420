import React from "react";
import "./App.css";
import BeyContainer from './Containers/BeyContainer'
import Favorites from './Containers/Favorites'
import api from './api'

class App extends React.Component {
  state = {
    api
  }

  render() {
    return (
      <div className="container" >
        <BeyContainer beyArray={this.state.api}/>
        <Favorites />
      </div>
    );
  }

};

export default App;