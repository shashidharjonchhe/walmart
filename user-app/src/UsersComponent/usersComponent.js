import React, { useState, useEffect } from "react";
import DemographicTableComponent from "../DemographicTableComponent/demographicTableComponent";
import "./usersComponent.css";

const UsersComponent = (props) => {
  const listOfItems = [
    { value: "tv" },
    { value: "crackers" },
    { value: "chips" },
    { value: "item " },
    { value: "carrot" },
    { value: "apple" },
    { value: "grapes" },
    { value: "cake" },
    { value: "ham" },
  ];
  const [usersData, setUsersData] = useState(null);
  const [getUsersAge, setUsersAge] = useState(null);
  useEffect(() => {
    fetch("/users/age", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setUsersAge(res));
    fetch("/users", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setUsersData(res));
  }, []);
  return (
    <div>
      {usersData && usersData.length && (
        <div className='users-container'>
          <div>
            <h3>ALL USERS</h3>
            <h5>Users and their age</h5>
          </div>
          <table>
            <tbody>
              <tr>
                <th>User</th>
                <th>Age</th>
              </tr>
            </tbody>
            {usersData.map((val, index) => {
              return (
                <tbody key={index}>
                  <tr key={index}>
                    <td>{val.username}</td>
                    <td>{val.age}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      )}
      <DemographicTableComponent
        usersData={usersData}
        getUsersAge={getUsersAge}
        listOfItems={listOfItems}
      />
    </div>
  );
};

export default UsersComponent;
