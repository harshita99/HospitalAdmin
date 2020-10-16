import React from "react";
import {
  //Jumbotron, Container,
  Button,
  ButtonGroup
} from "react-bootstrap";

function Dashboard() {
  return (
    <>
      <ButtonGroup
        aria-label="Selection of Ailment"
        style={{ padding: "10px 20px", width: "90vw" }}
      >
        <Button variant="outline-primary">Covid Patients</Button>
        <Button variant="outline-primary">Non Covid Patients</Button>
      </ButtonGroup>
    </>
  );
}

export default Dashboard;
