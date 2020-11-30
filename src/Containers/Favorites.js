import React, { Component } from "react";
import BeyCard from '../Components/BeyCard'

export default class Favorites extends Component {

  renderFaveBeys = () => {
    return this.props.faveBeyArray.map(faveBeyObj => <BeyCard key={faveBeyObj.id} bey={faveBeyObj} clickHandler={this.props.clickHandler}/>)
  }
  render() {
    // console.log(this.props)
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {this.renderFaveBeys()}
      </div>
    );
  }
}