
import React from "react";
import BeyCard from '../Components/BeyCard'

class BeyContainer extends React.Component {
  
  renderAllBeys = () => {
    return this.props.beyArray.map(beyObj => <BeyCard key={beyObj.id} bey={beyObj} />)
  }

  render() {
    console.log(this.props)
    return (
      <div className="index">
        <h1>Index</h1>
        {this.renderAllBeys()}
      </div>
    );
  }
}

export default BeyContainer;
