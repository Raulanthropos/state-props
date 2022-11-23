import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {

    state = {
        selectedHorror: false,
      }

    render() {
    return (
        <Card style={{ width: "18rem", border: this.state.selectedHorror ? "2px solid red" : "" }} key={this.props.book.asin}>
        <img
          className="w-100"
          src={this.props.book.img}
          alt={this.props.book.title}
          onClick={(event) => {
            this.setState({
              selectedHorror: !this.state.selectedHorror,
            });
          }}
        />
        <Card.Body className="caption">
          <div>
            <div className="card text-dark">
              <h3 className="text-truncate">{this.props.book.title}</h3>
              <p>{this.props.book.price}$</p>
            </div>
          </div>
        </Card.Body>
      </Card>
    )
    }
}

export default SingleBook;