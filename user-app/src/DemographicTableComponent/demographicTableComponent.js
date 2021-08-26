import React, { useState } from "react";
import "./demographicTableComponent.css";
const DemographicTableComponent = (props) => {
  const { getUsersAge, lists, listOfItems } = props;

  const [type, setType] = useState("");
  const [tableContent, setTableContent] = useState(null);
  const onChangeOfValue = (e) => {
    const tableData = Object.values(
      lists
        .filter((val) =>
          Object.keys(getUsersAge)
            .filter((val) => getUsersAge[val].includes(e.target.value))
            .includes(val.username)
        )
        .reduce((accumulator, currentValue) => {
          const ageVal = `${currentValue.age}`;
          !accumulator[ageVal]
            ? (accumulator[ageVal] = { ...currentValue, count: 1 })
            : (accumulator[ageVal].count += 1);
          return accumulator;
        }, {})
    );
    setTableContent(tableData);
    setType(e.target.value);
  };

  return (
    <div className="table-container">
      <h3>Age Demographic of Users with __</h3>
      <select placeholder="users" value={type} onChange={onChangeOfValue}>
        {listOfItems &&
          listOfItems.map((item, index) => (
            <option value={item.value} key={index}>
              {item.value}
            </option>
          ))}
      </select>
      <div>
        <table>
          <tbody>
            <tr>
              <th>AGE</th>
              <th>COUNT</th>
            </tr>
            {tableContent &&
              tableContent.map((val, index) => {
                return (
                  <tr key={index}>
                    <td>{val.age}</td>
                    <td>{val.count}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default DemographicTableComponent;
