import React, { useState, useEffect } from "react";
import ToDoDetail from "./ToDoDetail";
const CategoryDetails = ({ category }) => {
  const [selectedElement, setSelectedElement] = useState(null); // State to hold the selected element
  const [style, setStyle] = useState(true); // State for editing
  const handleElementClick = (elementData) => {
    setSelectedElement(elementData);
    setStyle(false);
    console.log(elementData);
    setOpen(true);
  };
  const [open, setOpen] = useState(true);
  return (
    <div className="">
      <div className="container">
        <div className="categoryButton second">
          <div className="centerText"> Create Note</div>
          <div>
            <img src="Path 6825.svg" className="plusIcon" alt="" />
          </div>
        </div>
      </div>
      <div className={open ? `grid` : ""}>
        <div>
          {category && (
            <div className="">
              <div className={` ${style ? "content" : "hide-content"}`}>
                {category.elements.map((element, index) => (
                  <div
                    className="row"
                    onClick={() => handleElementClick(element)}
                  >
                    <div key={index} className="">
                      <div className="title ">Title :{element.title}</div>
                    </div>
                    <div className="">
                      <div className="">{element.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="">
          <div
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? (
              <img src="Path 6864.svg" className="test" alt="." />
            ) : (
              <></>
            )}
          </div>

          {open ? (
            <div>
              {selectedElement && (
                <ToDoDetail selectedElement={selectedElement} />
              )}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryDetails;
