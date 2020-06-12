import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

import { CardWaiting } from "../../components";
import { FieldOperator } from "../../components";
import { useLocalState } from "../../utils/useLocalState";

const Front = () => {
  const [data, setData] = useLocalState("data", "");

  return (
    <center>
      <Button href="/operator" target="blank" variant="primary">
        Open operator page
      </Button>
      <p />
      <Row>
        <Col>
          <CardWaiting
            color={"light"}
            header={"Complain"}
            title={"Counter"}
            number={data !== "" ? parseInt(data) : setData(10)}
          />
        </Col>
      </Row>
    </center>
  );
};

export default function LandingPage() {
  return (
    <>
      <Container fluid className="mt-2">
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/" component={Front} />
            <Route path="/operator" component={FieldOperator} />
          </Switch>
        </Router>
      </Container>
    </>
  );
}
