import React from "react";

const ToDoDetail = ({ selectedElement }) => {
  return (
    <div className="tast">
      <div className="img-two">
        <div className="img">
          <img src="/Rectangle 2911.svg" alt="/" />
          <img src="/Rectangle 2911.svg" alt="/" />
          <img src="Rectangle 2913.svg" alt="/" />
        </div>
        <div className="img">
          <img src="Rectangle 2916.svg" alt="Add Task Icon" />
          <img src="Rectangle 2916.svg" alt="Add Task Icon" />
          <img src="Rectangle 2916.svg" alt="Add Task Icon" />
        </div>
      </div>
      <p>Selected Element</p>
      <div>Title: {selectedElement.title}</div>
      <div>Description: {selectedElement.description}</div>
    </div>
  );
};
export default ToDoDetail;
