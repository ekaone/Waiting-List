import React from "react";
import { Card } from "react-bootstrap";
import CountUp from "react-countup";

export default function CardWaiting(props) {
  return (
    <>
      <Card
        bg={props.color}
        text="dark"
        style={{ width: "18rem" }}
        className="shadow"
      >
        <h3>
          <Card.Header className="text-center text-dark">
            {props.header}
          </Card.Header>
        </h3>
        <Card.Body>
          <Card.Title className="text-center text-success">
            {props.title}
          </Card.Title>
          <Card.Text className="text-center text-primary display-3">
            <CountUp start={0} end={props.number} duration={5} />
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
