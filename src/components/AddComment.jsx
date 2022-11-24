import { Component } from "react";

class AddComment extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {

      event.preventDefault();
      const options = {
        method: "POST",
        body: JSON.stringify("https://striveschool-api.herokuapp.com/api/comments/"),
        headers: {
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdmNmVhOGQ4MzkzNTAwMTVlOGM0YjQiLCJpYXQiOjE2NjkyOTU3ODQsImV4cCI6MTY3MDUwNTM4NH0.MV56K9dDgaoj1C1upSG5nU76SrgKK_0n-Mqv5UqOhdw              ",
          "Content-Type": "application/json",
        }
      }
      try {
        const response = fetch("https://striveschool-api.herokuapp.com/api/comments/", options)
        if (response.ok) {
            alert('A comment was submitted: ' + this.state.value);
        }
      } catch (error) {
        console.log(error)
      }
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Add comment:
            <input type="textarea" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default AddComment;