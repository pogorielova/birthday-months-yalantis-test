import React, { useState, useEffect } from "react";
import "../src/scss/App.scss";
import { months } from "./months-list";
import MonthsList from "./components/MonthsList.jsx";
import Note from "./components/Note";

function App() {
  const [users, setUsers] = useState([]);

  const api_url =
    "https://yalantis-react-school-api.yalantis.com/api/task0/users";

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await fetch(api_url);
    const data = await res.json();
    setUsers(data);
  };

  return (
    <div className="app">
      <MonthsList months={months} users={users} />
      <Note />
    </div>
  );
}

export default App;
