import React, { Component } from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import EmployeeTable from "../../components/EmployeeTable/EmployeeTable";

class Directory extends Component {


  render() {
    return (
      <div className="container">
        <Wrapper>
          <EmployeeTable />
        </Wrapper>
      </div>
    );
  }
}

export default Directory;
