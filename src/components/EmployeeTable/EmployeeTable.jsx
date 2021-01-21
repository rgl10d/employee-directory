import React, { Component } from "react";
import axios from "axios";
import EmployeeRow from "../EmployeeRow/EmployeeRow";

class EmployeeTable extends Component {
  state = {
    employeeName: "",
    phone: "",
    email: "",
    picture: "",
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
          employeeName: `${response.data.results[0].name.first} ${response.data.results[0].name.last}`,
          username: `${response.data.results[0].login.username}`,
          email: `${response.data.results[0].email}`,
          picture: `${response.data.results[0].picture.thumbnail}`,
          location: `${response.data.results[0].location.city}, ${response.data.results[0].location.state}`,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
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
          <EmployeeRow
            name={this.state.employeeName}
            username={this.state.username}
            email={this.state.email}
            picture={this.state.picture}
            location={this.state.location}
          />
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default EmployeeTable;
