import React, { useState, useEffect } from "react";
import "../src/scss/App.scss";
import { months } from "./months-list";
import MonthsList from "./components/MonthsList.jsx";
import BirthdayUsersList from "./components/BirthdayUsersList.jsx";

function App() {
  const [users, setUsers] = useState([]);
  const [birthdayUsers, setBirthdayUsers] = useState([]);
  const [birthdayListIsVisible, setIfBirthdayListVisible] = useState(false);

  //---FETCHING DATA---

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

  //---FUNCTIONS TO HANDLE BIRTHDAY USERS LIST---

  const mouseEnterHandler = (e) => {
    const birthdayUsers = users.filter(
      (user) => +user.dob.slice(5, 7) === e.target.value
    );
    setBirthdayUsers(birthdayUsers);
    setIfBirthdayListVisible(true);
  };

  const mouseLeaveHandler = () => {
    setIfBirthdayListVisible(false);
  };


  //---RENDERING---

  return (
    <div className='app'>
      <MonthsList
        months={months}
        mouseEnterHandler={mouseEnterHandler}
        mouseLeaveHandler={mouseLeaveHandler}
        users={users}
      />
      <BirthdayUsersList
        birthdayUsers={birthdayUsers}
        visibility={birthdayListIsVisible}
      />
    </div>
  );
}

export default App;
