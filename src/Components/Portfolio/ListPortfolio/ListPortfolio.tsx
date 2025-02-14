import React from "react";
import CardPortfolio from "../CardPortfolio/CardPortfolio";

interface Props {
  portfolioValues: string[];
  onPortfolioRemove: (symbol: string) => void;
}

const ListPortfolio = (props: Props) => {
  return (
    <>
      <h3>My Portfolio</h3>
      <div className="portfolio-list">
        {props.portfolioValues.map((value: string, index: number) => {
          return (
            <CardPortfolio
              key={index}
              portfolioValue={value}
              onPortfolioRemove={props.onPortfolioRemove}
            />
          );
        })}
      </div>
    </>
  );
};

export default ListPortfolio;
