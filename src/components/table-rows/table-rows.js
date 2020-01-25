import React from "react";
import "./table-rows.css";

const TableRows = ({ list, deleteBtn, onSort }) => {
  const renderList = () => {
    if (list.length > 0) {
      return list.map((item, index) => {
        return (
          <tr key={item.id}>
            <th scope="row">{index + 1}</th>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.phone}</td>
            <td>{item.gender}</td>
            <td>{item.age}</td>

            <td>
              <button
                onClick={() => deleteBtn(item.id)}
                className="btn btn-danger"
                type="button"
              >
                Delete
              </button>
            </td>
          </tr>
        );
      });
    } else {
      return null;
    }
  };

  const tableList = renderList();

  return (
    <table className=" table custom-table table-hover table-borderless">
      <thead className="thead-light">
        <tr>
          <th scope="col">#</th>
          <th
            onClick={e => {
              onSort("firstName");
            }}
            scope="col"
            className="table-header"
          >
            Name
          </th>
          <th
            onClick={e => {
              onSort("lastName");
            }}
            scope="col"
            className="table-header"
          >
            Lastname
          </th>
          <th
            onClick={e => {
              onSort("phone");
            }}
            scope="col"
            className="table-header"
          >
            Phone
          </th>
          <th
            onClick={e => {
              onSort("gender");
            }}
            scope="col"
            className="table-header"
          >
            Gender
          </th>
          <th
            onClick={e => {
              onSort("age");
            }}
            scope="col"
            className="table-header"
          >
            Age
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>{tableList}</tbody>
    </table>
  );
};

export default TableRows;
