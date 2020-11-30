import React from "react";

const BeyCard = (props) => {
  // console.log(props)
  let {bey, clickHandler} = props

  const imgClickHandler = () => {
    // console.log("clicked")
    clickHandler(bey.id)
  }
  return (
    <div className="card">
      <img alt="bey" src={bey.img} onClick={imgClickHandler}/>
      <h2>{bey.name}</h2>
    </div>
  );
};

export default BeyCard;
