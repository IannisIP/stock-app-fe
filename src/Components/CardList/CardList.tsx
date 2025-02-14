import React, { SyntheticEvent } from "react";
import Card from "../Card/Card";
import { CompanySearch } from "../../company";

interface Props {
  searchResult: CompanySearch[];
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const CardList: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <div className="card-list">
      {props.searchResult.map((company, idx) => {
        return (
          <Card
            key={idx}
            searchResult={company}
            onPortfolioCreate={props.onPortfolioCreate}
          />
        );
      })}
    </div>
  );
};

export default CardList;
