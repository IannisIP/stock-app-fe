import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CompanyProfile } from "../../company";
import { getCompanyProfile } from "../../api";

interface Props {}

const CompanyPage = (props: Props) => {
  let { ticker = "" } = useParams<{ ticker: string }>();
  const [company, setCompany] = useState<CompanyProfile | undefined | null>(
    null
  );

  useEffect(() => {
    const getProfile = async () => {
      const result = await getCompanyProfile(ticker);
      setCompany(result?.data);
    };

    getProfile();
  }, []);

  return (
    <div>
      {company ? <div>{company.companyName}</div> : <div>Company missing</div>}
    </div>
  );
};

export default CompanyPage;
