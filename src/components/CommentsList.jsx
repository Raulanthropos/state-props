import { Component } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

class CommentsList extends Component {

    render() {
        return (
            <ListGroup>
                <ListGroupItem>{Comment.map(c => c)}</ListGroupItem>
            </ListGroup>
        )
    }
}

export default CommentsList;