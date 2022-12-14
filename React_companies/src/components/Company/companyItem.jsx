import React from "react";

import * as CompanyServer from "./companyServer";
import { useNavigate } from "react-router-dom";

const CompanyItem = ({ company, listCompanies }) => {
  //   console.log(props);
  const navigate = useNavigate();
  const handleDelete = async (companyId) => {
    await CompanyServer.DeleteCompany(companyId);
    listCompanies();
  };
  return (
    <div className="col-md-4 mb-4">
      <div className="card card-body">
        <h3 className="card-title text-center">{company.name}</h3>
        <p className="card-text">
          Nit: <strong>{company.nit}</strong>
          <br></br>
          Address: <strong>{company.address}</strong>
          <br></br>
          Phone: <strong>{company.phone}</strong>
          <br></br>
        </p>

        <button
          onClick={() => navigate(`/updateCompany/${company.id}`)}
          className="btn btn-outline-primary"
        >
          Update
        </button>
        <button
          className="btn btn-outline-danger my-2"
          onClick={() => company.id && handleDelete(company.id)}
        >
          Delete Company
        </button>
      </div>
    </div>
  );
};

export default CompanyItem;
