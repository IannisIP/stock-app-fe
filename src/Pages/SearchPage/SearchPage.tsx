import React, { SyntheticEvent, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Search from "../../Components/Search/Search";
import ListPortfolio from "../../Components/Portfolio/ListPortfolio/ListPortfolio";
import CardList from "../../Components/CardList/CardList";
import { searchCompanies } from "../../api";
import { CompanySearch } from "../../company";

interface Props {}

const SearchPage = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  const [searchReasult, setSearchResult] = useState<CompanySearch[]>([]);
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
  const [serverError, setServerError] = useState<string>("");

  const handleSearchChange = (value: string) => {
    setSearch(value);
  };

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);
    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }
  };

  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    const updatedPortfolio = [...portfolioValues, e.target[0].value];
    setPortfolioValues(updatedPortfolio);
  };

  const onPortfolioRemove = (symbol: string) => {
    const updatedPortfolio = portfolioValues.filter(
      (value) => value !== symbol
    );
    setPortfolioValues(updatedPortfolio);
  };

  return (
    <div>
      <Search
        search={search}
        handleSearchChange={handleSearchChange}
        onSearchSubmit={onSearchSubmit}
      />
      <ListPortfolio
        portfolioValues={portfolioValues}
        onPortfolioRemove={onPortfolioRemove}
      />
      {serverError && <div>{serverError}</div>}
      <CardList
        searchResult={searchReasult}
        onPortfolioCreate={onPortfolioCreate}
      />
    </div>
  );
};

export default SearchPage;
