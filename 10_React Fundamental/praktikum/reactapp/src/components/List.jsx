// export class List extends Component {
//   render() {
//     return;
//   }
// }

// export default List;

import React from "react";
import Usermocks from "../userMocks";
import "./Component.css";

const List = () => {
  return (
    <div>
      {Usermocks.map((list) => (
        <p style={{ textDecoration: list.completed ? "line-through" : "none" }} className="contain">
          {list.title}
        </p>
      ))}
    </div>
  );
};

export default List;
