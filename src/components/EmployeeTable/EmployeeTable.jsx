import React, { Component } from "react";
import axios from "axios";
import EmployeeRow from "../EmployeeRow/EmployeeRow";

class EmployeeTable extends Component {
  state = {
    results: [],
    sortedEmployees: [],
    filteredEmployees: [],
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
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  sortNames = () => {
    console.log("clicked!");
    const sorted = [].concat(this.state.results);
    sorted.sort((a, b) => (a.name.first > b.name.first ? 1 : -1));
    this.setState({
      results: sorted,
    });
    console.log(sorted);
  };

  render() {
    return (
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">
              Name{" "}
              <i
                className="fa fa-fw fa-sort"
                onClick={() => {
                  this.sortNames();
                }}
              />
            </th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Location</th>
          </tr>
        </thead>
        <tbody>
          {this.state.results.map((employees, index) => {
            return (
              <EmployeeRow
                key={index}
                name={employees.name.first}
                lastname={employees.name.last}
                username={employees.login.username}
                email={employees.email}
                picture={employees.picture.thumbnail}
                city={employees.location.city}
                state={employees.location.state}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default EmployeeTable;
