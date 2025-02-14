import React from "react";

interface Props {
  portfolioValue: string;
  onPortfolioRemove: (symbol: string) => void;
}

const CardPortfolio = (props: Props) => {
  return (
    <>
      <h4>{props.portfolioValue}</h4>
      <button onClick={(e) => props.onPortfolioRemove(props.portfolioValue)}>
        Remove
      </button>
    </>
  );
};

export default CardPortfolio;
