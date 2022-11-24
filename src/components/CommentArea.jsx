import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import { ListGroup, ListGroupItem } from "react-bootstrap";

class CommentArea extends Component {

    state = {
        comments: [],
      };
    
      fetchTheThing = async () => {
        const options = {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdmNmVhOGQ4MzkzNTAwMTVlOGM0YjQiLCJpYXQiOjE2NjkyOTU3ODQsImV4cCI6MTY3MDUwNTM4NH0.MV56K9dDgaoj1C1upSG5nU76SrgKK_0n-Mqv5UqOhdw              ",
            "Content-Type": "application/json",
          },
        };
        try {
          const response = await fetch(
            "https://striveschool-api.herokuapp.com/api/comments/",
            options
          );
          if (response.ok) {
            const data = await response.json();
            this.setState({
              comments: data,
            });
            //   console.log(data);
          } else {
            console.log("Error! Danger! Run!");
          }
        } catch (error) {
          console.log(error);
        }
      };
    
      componentDidMount = () => {
        this.fetchTheThing();
      };

render() {
    return (
        <div>
        <ListGroup>
        {this.state.comments.map((c) => {
          return <ListGroupItem key={c._id}>{c.comment}</ListGroupItem>;
        })}
      </ListGroup>
    <AddComment/>
    </div>
    )
}
}

export default CommentArea;

