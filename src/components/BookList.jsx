import { Card, Container, Row, Col } from "react-bootstrap";
import { Component } from "react";
import horror from "../data/horror.json";
import SingleBook from "./SingleBook";

class BookList extends Component {

  render() {
    return (
      <Container>
        <Row className="justify-content-center mt-3 mb-4">
          <Col md={4} className="text-center">
            {horror.slice(0, 20).map((thehorror) => (
              <SingleBook book={thehorror}/>
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookList;

