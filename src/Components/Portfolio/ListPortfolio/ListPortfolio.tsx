import React from "react";
import CardPortfolio from "../CardPortfolio/CardPortfolio";

interface Props {
  portfolioValues: string[];
}

const ListPortfolio = (props: Props) => {
  return (
    <>
      <h3>My Portfolio</h3>
      <div className="portfolio-list">
        {props.portfolioValues.map((value: string, index: number) => {
          return <CardPortfolio key={index} portfolioValue={value} />;
        })}
      </div>
    </>
  );
};

export default ListPortfolio;
