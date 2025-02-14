import React from "react";
import { Link } from "react-router";

interface Props {
  portfolioValue: string;
  onPortfolioRemove: (symbol: string) => void;
}

const CardPortfolio: React.FC<Props> = ({
  portfolioValue,
  onPortfolioRemove,
}: Props): JSX.Element => {
  return (
    <>
      <div className="flex flex-col w-full p-8 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
        <Link
          to={`/company/${portfolioValue}`}
          className="pt-6 text-xl font-bold"
        >
          {portfolioValue}
        </Link>
        <button
          className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-red-500 hover:text-red-500 hover:bg-white border-red-500"
          onClick={(e) => onPortfolioRemove(portfolioValue)}
        >
          Remove
        </button>
      </div>
    </>
  );
};

export default CardPortfolio;
