import React, { useState, useEffect } from "react";
import CategoryDetails from "./CategoryDetails";
import axios from "axios";
import NewTodoo from "./NewTodoo";
export default function Category() {
  const [data, setData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showDiv, setShowDiv] = useState(true);
  useEffect(() => {
    // Fetch the data when the component mounts
    axios
      .get("/data.json")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const sendData = (category) => {
    setSelectedCategory(category);
    console.log(category);
    setShowDiv(false);
  };
  return (
    <div className="body">
      <div className="categoryCard">
        <div className="categoryButton second">
          <div className="centerText"> Create Category</div>
          <div>
            <img src="Path 6825.svg" className="plusIcon" alt="" />
          </div>
        </div>

        {data ? (
          <div>
            {data.categories.map((category) => (
              <div
                onClick={() => sendData(category)}
                className="categoryElements"
              >
                <div className="item">
                  <img alt="test" src="Vector.svg" className="folderImage" />

                  <div key={category.categoryId}>
                    <p>{category.name}</p>
                  </div>
                </div>
                <img
                  src="Path 7464.svg"
                  alt="Arrow Icon"
                  className="arrowDown"
                />
              </div>
            ))}
          </div>
        ) : (
          <p>Loading</p>
        )}
      </div>
      {showDiv ? (
        <NewTodoo />
      ) : (
        <div>
          {selectedCategory && <CategoryDetails category={selectedCategory} />}
        </div>
      )}
    </div>
  );
}
