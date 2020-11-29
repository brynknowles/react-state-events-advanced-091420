import React from "react";

const BeyCard = (props) => {

  let {bey} = props

  const imgClickHandler = () => {
    console.log("clicked", props)
  }

  return (
    <div className="card">
      <img alt="bey" src={bey.img} onClick={imgClickHandler}/>
      <h2>{bey.name}</h2>
    </div>
  );
};

export default BeyCard;
