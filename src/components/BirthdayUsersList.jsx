import React from "react";

function BirthdayUsersList(props) {

  const handleSort = (a, b) => {
    if (a.dob.slice(8, 10) > b.dob.slice(8, 10)) {
      return 1;
    }
    if (a.dob.slice(8, 10) < b.dob.slice(8, 10)) {
      return -1;
    }
    return 0;
  }

 
  return (
    <ul className="birthday-users-list" >
      {props.birthdayUsers.sort(handleSort).map((user) => (
        <li className="user-item" key={user.id}>
          <div className="day-of-birth">{+user.dob.slice(8, 10)}</div>
          <div className="user-name">
            {user.firstName} {user.lastName}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default BirthdayUsersList;
