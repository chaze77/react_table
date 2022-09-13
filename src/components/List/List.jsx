import React from "react";

const List = ({ article }) => {
  return (
    <div>
      {article.map((item) => {
        <table>
          <thead>
            <tr>
              <th>Gender</th>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{item.Gender}</td>
              <td>{item.Name}</td>
            </tr>
            <tr>
              <td>Pears</td>
              <td>1.3 dollars</td>
            </tr>
          </tbody>
        </table>;
      })}
    </div>
  );
};

export default List;
