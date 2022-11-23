import { Card, Container, Row, Col } from "react-bootstrap";
import { Component } from "react";
import horror from "../data/horror.json";

class SingleBook extends Component {

    state = {
        selectedHorror: false,
      }

  render() {
    return (
      <Container>
        <Row className="justify-content-center mt-3 mb-4">
          <Col xs={4} md={4} className="text-center">
            {horror.map((thehorror) => (
              <Card style={{ width: "18rem" }} key={thehorror.asin}>
                <img
                  className="d-block w-100 ratio"
                  src={thehorror.img}
                  alt={thehorror.title}
                  onClick={(event) => {
                    this.setState({
                      selectedHorror: true,
                    });
                    event.currentTarget.classlist.add("some-classlist")
                  }}
                />
                <Card.Body className="caption">
                  <div>
                    <div className="card text-dark">
                      <h3 className="text-truncate">{thehorror.title}</h3>
                      <p>{thehorror.price}$</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SingleBook;

