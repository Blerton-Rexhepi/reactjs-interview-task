import React from "react";

function NewTodoo() {
  return (
    <div>
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

      <input typeof="text" className="input" placeholder="Add a title" />
      <textarea className="textArea" placeholder="Write your note here..." />
    </div>
  );
}

export default NewTodoo;
