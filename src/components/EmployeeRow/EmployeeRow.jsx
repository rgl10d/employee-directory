import React from 'react';

const EmployeeRow = (props) => {
    return (
        <tr>
          <th scope="row">
              <img src={props.picture} alt={props.name}/>
          </th>
          <td>{props.name}</td>
          <td>{props.username}</td>
          <td>{props.email}</td>
          <td>{props.location}</td>
        </tr>
    );
};

export default EmployeeRow;