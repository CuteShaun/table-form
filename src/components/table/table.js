import React, { useState, useEffect, useCallback, useContext } from "react";
import { Context } from "../../context";
import TableRows from "../table-rows";
import "./table.css";

const Table = ({ deleteItem }) => {
  const [state, setState] = useState([]);
  const [order, setOrder] = useState(true);

  const context = useContext(Context);

  const deleteBtn = id => {
    deleteItem(id);
  };

  const getSortedData = (data, prop, isAsc) => {
    return data.sort((a, b) => (a[prop] < b[prop] ? -1 : 1) * (isAsc ? 1 : -1));
  };

  const onSort = col => {
    setOrder(prevOrder => !prevOrder);
    const sorted = getSortedData([...state], col, order);
    setState(sorted);
  };

  const getData = useCallback(() => {
    setState(() => [...context]);
  }, [context]);

  useEffect(() => {
    getData();
  }, [getData]);

  return <TableRows list={state} deleteBtn={deleteBtn} onSort={onSort} />;
};

export default Table;
