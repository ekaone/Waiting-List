import React from "react";
import { Form } from "react-bootstrap";
import { useLocalState } from "../../utils/useLocalState";

export default function FieldOperator() {
  const [data, setData] = useLocalState("data", "");

  return (
    <>
      <Form>
        <Form.Group controlId="formBasicCounter">
          <Form.Control
            type="number"
            placeholder="Enter number"
            onChange={e => setData(e.target.value)}
          />
          <Form.Text className="text-muted">
            Enter your number and see dynamic changes on front page
          </Form.Text>
        </Form.Group>
      </Form>
    </>
  );
}
