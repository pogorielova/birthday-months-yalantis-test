import React, { useState } from "react";
import BirthdayUsersList from "./BirthdayUsersList";

function MonthsList({ months, users }) {
  const [birthdayUsers, setBirthdayUsers] = useState([]);

  const colorPicker = (key) => {
    const birthdayUsers = users.filter((user) => user.dob.slice(5, 7) === key)
      .length;
    if (birthdayUsers < 3) {
      return "grey";
    } else if (birthdayUsers > 2 && birthdayUsers < 7) {
      return "blue";
    } else if (birthdayUsers > 6 && birthdayUsers < 11) {
      return "purple";
    } else {
      return "red";
    }
  };

  const mouseEnterHandler = (e) => {
    const birthdayUsers = users.filter(
      (user) => +user.dob.slice(5, 7) === e.target.value
    );
    setBirthdayUsers(birthdayUsers);
  };

  return (
    <ul className="months-container">
      {months.map((month) => (
        <li
          className={`month-item`}
          value={month.key}
          key={month.key}
          onMouseEnter={mouseEnterHandler}
          onClick={mouseEnterHandler}
        >
          {month.name}
          <li className={`color-marker  ${colorPicker(month.key)}`} value={month.key} />
          <BirthdayUsersList birthdayUsers={birthdayUsers} />
        </li>
      ))}
    </ul>
  );
}

export default MonthsList;
