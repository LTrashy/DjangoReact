// const API_URL = "http://localhost:8000/api/companies/";
const API_URL = "https://django-company.herokuapp.com/api/companies/";

export const listCompanies = async () => {
  return await fetch(API_URL);
};
export const getCompany = async (companyId) => {
  return await fetch(`${API_URL}${companyId}`);
};

export const registerCompany = async (newCompany) => {
  return await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: String(newCompany.name).trim(),
      address: String(newCompany.address).trim(),
      nit: parseInt(newCompany.nit),
      phone: parseInt(newCompany.phone),
    }),
  });
};

export const updateCompany = async (companyId, updatedCompany) => {
  return await fetch(`${API_URL}${companyId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: String(updatedCompany.name).trim(),
      address: String(updatedCompany.address).trim(),
      nit: parseInt(updatedCompany.nit),
      phone: parseInt(updatedCompany.phone),
    }),
  });
};

export const DeleteCompany = async (companyId) => {
  return await fetch(`${API_URL}${companyId}`, {
    method: "DELETE",
  });
};
