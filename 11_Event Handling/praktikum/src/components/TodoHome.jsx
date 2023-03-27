import React, { Component } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

export class TodoHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: uuidv4(),
          title: "Mengerjakan Exercise",
          completed: true,
        },
        {
          id: uuidv4(),
          title: "Mengerjakan Assignment",
          completed: false,
        },
      ],
    };
  }

  hapusList = (id) => {
    const newDataList = this.state.data.filter((list) => list.id !== id);
    this.setState({ data: newDataList });
  };

  tambahList = (newlist) => {
    const newList = { id: uuidv4, ...newlist };
    this.setState({ data: [...this.state.data, newList] });
  };

  render() {
    return (
      <div className="body-styled">
        <div>
          <div>
            <h1>todos</h1>
          </div>
        </div>
        <div>
          <TodoInput tambahList={this.tambahList} />
        </div>
        <div>
          <TodoList data={this.state.data} hapusList={this.hapusList} />
        </div>
      </div>
    );
  }
}

export default TodoHome;
