import React, { Component } from "react";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import Wrapper from "../../components/Wrapper/Wrapper";

class Directory extends Component {
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
