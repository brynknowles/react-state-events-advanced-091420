import React from "react";

const BeyCard = (props) => {

  let {bey} = props

  return (
    <div className="card">
      <img alt="bey" src={bey.img}/>
      <h2>{bey.name}</h2>
    </div>
  );
};

export default BeyCard;
