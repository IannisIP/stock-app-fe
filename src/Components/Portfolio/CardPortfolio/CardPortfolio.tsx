import React from "react";

interface Props {
  portfolioValue: string;
}

const CardPortfolio = (props: Props) => {
  return (
    <>
      <h4>{props.portfolioValue}</h4>
      <button>Remove</button>
    </>
  );
};

export default CardPortfolio;
