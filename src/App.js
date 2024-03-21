import "./App.css";
import Category from "./components/category";
import CategoryDetails from "./components/CategoryDetails";
import NewTodoo from "./components/NewTodoo";
function App() {
  return (
    <div>
      <div className="header">
        <p>Your Notes</p>
      </div>
      <div className="">
        <Category />
      </div>
    </div>
  );
}

export default App;
