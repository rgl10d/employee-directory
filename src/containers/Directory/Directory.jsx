import React, { Component } from "react";
import axios from "axios";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import Wrapper from "../../components/Wrapper/Wrapper";

class Directory extends Component {
  state = {
    employeeName: "",
  };

  componentDidMount() {
    this.generateEmployees();
  };

  generateEmployees = () => {
    axios
      .get("https://randomuser.me/api/?results=30")
      .then((response) => {
        console.log(response.data.results);
        this.setState({
            employeeName: `${response.data.results[0].name.first}`
        })
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="container">
        <Wrapper>
          <EmployeeCard name={this.state.employeeName} />
          <EmployeeCard />
        </Wrapper>
      </div>
    );
  }
}

export default Directory;
