import React from "react";

function MonthsList({ months, mouseEnterHandler, mouseLeaveHandler, users }) {
  const colorPicker = (key) => {
    const birthdayUsers = users.filter((user) => user.dob.slice(5, 7) === key)
      .length;
    if (birthdayUsers < 3) {
      return "grey";
    } else if (birthdayUsers > 2 && birthdayUsers < 7) {
      return "blue";
    } else if (birthdayUsers > 6 && birthdayUsers < 11) {
      return "green";
    } else {
      return "red";
    }
  };

  return (
    <ul className="months-container">
      {months.map((month) => (
        <li
          className={`month-item`}
          value={month.key}
          key={month.key}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          {month.name}
          <div className={`color-marker  ${colorPicker(month.key)}`}></div>
        </li>
      ))}
    </ul>
  );
}

export default MonthsList;
