import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as CompanyServer from "./companyServer";

const CompanyForm = () => {
  const history = useNavigate();
  const params = useParams();

  const initialState = {
    id: 0,
    name: "",
    address: "",
    nit: "",
    phone: "",
  };
  const [company, setCompany] = useState(initialState);

  const handleInputChange = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res;
      if (!params.id) {
        res = await CompanyServer.registerCompany(company);
        const data = await res.json();

        if (data.message === "Success") {
          setCompany(initialState);
        }
      } else {
        await CompanyServer.updateCompany(params.id, company);
      }
      history("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getCompany = async (companyId) => {
    try {
      const res = await CompanyServer.getCompany(companyId);
      const data = await res.json();
      const { name, address, nit, phone } = data.company;
      setCompany({ name, address, nit, phone });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params.id) {
      getCompany(params.id);
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div className="col-md-3 mx-auto">
      <h2 className="mb-3 text-center text-light">Company</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            name="name"
            autoComplete="off"
            type="text"
            className="form-control"
            placeholder="Name"
            value={company.name}
            onChange={handleInputChange}
          />
          <label>Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            name="address"
            autoComplete="off"
            type="text"
            className="form-control"
            placeholder="Direccion"
            value={company.address}
            onChange={handleInputChange}
          />
          <label>Address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            name="nit"
            placeholder="Nit"
            value={company.nit}
            onChange={handleInputChange}
          />
          <label>Nit</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            name="phone"
            placeholder="Telefono"
            value={company.phone}
            onChange={handleInputChange}
          />
          <label>Phone</label>
        </div>
        <div className="d-grid gap-2">
          {params.id ? (
            <button type="submit" className="btn btn-outline-primary">
              Update
            </button>
          ) : (
            <button type="submit" className="btn btn-outline-success">
              Register
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CompanyForm;
