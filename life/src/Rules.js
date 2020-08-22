import React from "react";

const Rules = () => {
  return (
    <div className="body">
      <h4>Rules</h4>
      <ul>
        <li>
          For a space that is populated: Each cell with one or no neighbors
          dies, as if by solitude.
        </li>

        <li>
          Each cell with four or more neighbors dies, as if by overpopulation.
        </li>

        <li>Each cell with two or three neighbors survives.</li>

        <li>
          For a space that is empty or unpopulated:{" "}
          <i>Each cell with three neighbors becomes populated.</i>
        </li>
      </ul>
    </div>
  );
};

export default Rules;
