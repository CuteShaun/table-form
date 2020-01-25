import React, { useState } from "react";
import { Provider } from "../../context";
import guidGenerator from "../../utils/idGen";
import useLocalStorage from "../../hooks/useLocalStorage";
import Table from "../../components/table";
import Form from "../form";

import "./app.css";

const App = () => {
  const [formData = [], setFormData] = useLocalStorage("formData");
  const [state, setState] = useState(formData || []);

  const deleteItem = id => {
    const newState = [...state.filter(item => item.id !== id)];
    setFormData(newState);
    setState(newState);
  };

  const dataMapper = data => {
    const dataWithId = { ...data, id: guidGenerator() };
    setState(
      prevState => {
        return [...prevState, { ...dataWithId }];
      },

      setFormData([...formData, dataWithId])
    );
  };

  return (
    <div className="container">
      <main className="app">
        <Provider value={state}>
          <Form dataMapper={dataMapper} />
          <Table deleteItem={deleteItem} userFormData={state} />
        </Provider>
      </main>
    </div>
  );
};

export default App;
