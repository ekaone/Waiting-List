import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import { CardWaiting } from "../../components";
import { useLocalState } from "../../utils/useLocalState";

export default function LandingPage() {
  const [data, setData] = useLocalState("data", "");

  return (
    <Container fluid className="mt-5">
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
    </Container>
  );
}
