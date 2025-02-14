import axios from "axios";
import { CompanyProfile, CompanySearch } from "./company";

interface SearchResponse {
  data: CompanySearch[];
}
export const searchCompanies = async (query: String) => {
  try {
    const data = await axios.get<SearchResponse>(
      `https://financialmodelingprep.com/api/v3/search-ticker?query=${query}&limit=${10}&exchange=${"NASDAQ"}&apikey=${
        process.env.REACT_APP_FINANCIAL_API_KEY
      }`
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("axios: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "Unexpected error";
    }
  }
};

export const getCompanyProfile = async (symbol: string) => {
  try {
    const data = await axios.get<CompanyProfile>(
      "https://financialmodelingprep.com/api/v3/profile/" +
        symbol +
        "?apikey=" +
        process.env.REACT_APP_FINANCIAL_API_KEY
    );
    return data;
  } catch (error: any) {
    console.log("error: ", error.message);
  }
};
