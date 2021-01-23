import React, { Component } from "react";
import axios from "axios";
import EmployeeRow from "../EmployeeRow/EmployeeRow";

class EmployeeTable extends Component {
  state = {
    results: [],
    employeeName: [],
    username: [],
    email: [],
    picture: [],
    location: [],
  };

  componentDidMount() {
    this.generateEmployees();
  }

  generateEmployees = () => {
    axios
      .get("https://randomuser.me/api/?results=30&nat=US")
      .then((response) => {
        console.log(response.data.results);
        this.setState({
          results: response.data.results,
        })
        console.log(this.state.employeeName);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {

    const employees = this.state.results.map(employees=>{
      return(
        <EmployeeRow
        name={employees.name.first}
        lastname = {employees.name.last}
        username={employees.login.username}
        email={employees.email}
        picture={employees.picture.thumbnail}
        city={employees.location.city}
        state={employees.location.state}
      />
      )
    })
    return (
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Location</th>
          </tr>
        </thead>
        <tbody>
          {employees}
        </tbody>
      </table>
    );
  }
}

export default EmployeeTable;
