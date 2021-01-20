import React, { Component } from "react";
import axios from "axios";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import Wrapper from "../../components/Wrapper/Wrapper";

class Directory extends Component {
  componentDidMount() {
    this.generateEmployees();
  }

  generateEmployees = () => {
    axios
      .get("https://randomuser.me/api/")
      .then((response) => {
        console.log(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="container">
        <Wrapper>
          <EmployeeCard />
          <EmployeeCard />
        </Wrapper>
      </div>
    );
  }
}

export default Directory;
