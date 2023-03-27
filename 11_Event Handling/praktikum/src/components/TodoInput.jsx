import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

export class TodoInput extends Component {
  state = {
    title: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const InputIsNotEmpty = this.state.title;

    if (InputIsNotEmpty) {
      const newData = {
        id: uuidv4(),
        title: this.state.title,
        completed: false,
      };
      this.props.tambahList(newData);
      this.setState({
        title: this.state.title,
      });
    } else {
      alert("Data Harus Di isi");
    }
  };

  render() {
    return (
      <div>
        <input type="text" placeholder="Isi Title Disini" value={this.state.title} name="title" onChange={this.onChange}></input>
        <button onClick={this.handleSubmit} className="button-styled">
          submit
        </button>
      </div>
    );
  }
}

export default TodoInput;
