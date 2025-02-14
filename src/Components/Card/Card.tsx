import React, { SyntheticEvent } from "react";
import "./Card.css";
import { CompanySearch } from "../../company";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";

interface Props {
  searchResult: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <div className="card">
      <div>Image</div>
      <div>
        <h2>
          {props.searchResult.name} ({props.searchResult.symbol})
        </h2>
        <p>${props.searchResult.currency}</p>
      </div>
      <p className="info">{props.searchResult.stockExchange}</p>
      <AddPortfolio
        onPortfolioCreate={props.onPortfolioCreate}
        symbol={props.searchResult.symbol}
      />
    </div>
  );
};

export default Card;
