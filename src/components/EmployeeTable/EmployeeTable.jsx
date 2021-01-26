import React, { Component } from "react";
import axios from "axios";
import EmployeeRow from "../EmployeeRow/EmployeeRow";

let sortCheck = false;

class EmployeeTable extends Component {
  state = {
    results: [],
    rendered: [],
    search: "",
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
          unfiltered: response.data.results
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  sortNames = () => {
    const sortedArray = [].concat(this.state.results);
    if (!sortCheck) {
      sortedArray.sort((a, b) => (a.name.first > b.name.first ? 1 : -1));
      sortCheck = true;
    } else if (sortCheck) {
      sortedArray.sort((a, b) => (a.name.first < b.name.first ? 1 : -1));
      sortCheck = false;
    }
    this.setState({
      results: sortedArray,
    });
  };

  searchInput = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword });
    console.log(keyword);
    const filtered = this.state.results.filter((user) => {
      return user.login.username.includes(keyword);
    });
    if(keyword === ""){
      this.setState({results: this.state.unfiltered})
    } else {
    this.setState({results: filtered})}
  };

  render() {
    return (
      <>
        <input
          type="text"
          placeholder="Search Username"
          value={this.state.keyword}
          style={{ marginBottom: 20 }}
          onChange={(e) => this.searchInput(e)}
        />
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
      </>
    );
  }
}

export default EmployeeTable;
