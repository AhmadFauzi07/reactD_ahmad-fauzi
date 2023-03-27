import React from "react";
import TodoHome from "./TodoHome";

const TodoList = (props) => {
  const { data, hapusList } = props;
  return (
    <div>
      <div>
        {data.map((listitem) => (
          <p key={listitem.id}>
            <input type="checkbox"></input>
            {listitem.title}
            <button
              onClick={() => {
                hapusList(listitem.id);
              }}
              className="button-styled"
            >
              delete
            </button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
