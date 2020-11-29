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
        <BeyContainer beyArray={this.state.api} />
        <Favorites />
      </div>
    );
  }

};

export default App;


// # Deliverables:

// - Render a list of all Beyonce images

// - When a User clicks on a Beyonce image in `BeyContainer` it should change the `favorite` key of that object to `true`, which should then add that Beyonce to the `Favorites` Container

// - When a User clicks on a Beyonce image in the `Favorites` container, it should change the `favorite` key of that object to `false`, which should then remove it from the FavoritesContainer and send an alert saying "I got a hot sauce in my bag, swag"