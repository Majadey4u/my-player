import React from "react";
import { Card } from "react-bootstrap";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card style={{ color: "black", width: "45rem" }}>
      <Card.Body className="container">
        <img style={{ width: "30rem" }} src={imageUrl} alt={name} />
        <Card.Title> </Card.Title>
        <Card.Text style={{ paddingTop: "15%" }} className="text">
          <span>NAME:</span> {name}
          <br />
          <span>TEAM:</span> {team}
          <br />
          <span>NATIONALITY:</span> {nationality}
          <br />
          <span>JERSEY NUMBER:</span> {jerseyNumber}
          <br />
          <span>AGE:</span> {age}
          <br />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
