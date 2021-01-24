import React, { Component } from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import EmployeeTable from "../../components/EmployeeTable/EmployeeTable";
import Navbar from "../../components/Navbar/Navbar";

class Directory extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <Wrapper>
            <EmployeeTable />
          </Wrapper>
        </div>
      </>
    );
  }
}

export default Directory;
