import React from "react";
import { employee_data } from "./EmpData";

const ReadOnly = ({ employee_data, Edit, Delete }) => {
  return (
    <>
      <tr>
        <td>{employee_data.FirstName}</td>
        <td>{employee_data.LastName}</td>
        <td>{employee_data.Email}</td>
        <td>{employee_data.phoneNumber}</td>
        <td>{employee_data.Gender}</td>
        <td>{employee_data.Department}</td>
        <td>{employee_data.Skills}</td>
        <td>{employee_data.About}</td>
        <td className="d-flex p-4">
          <button className="btn btn-dark me-3" onClick={() => Edit(employee_data)}>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button className="btn btn-danger" onClick={() => Delete(employee_data.id)}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </td>
      </tr>
    </>
  );
};

export default ReadOnly;
