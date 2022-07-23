import "./App.css";
import Search from "./components/search/search";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className="container">
      <Search onSearchChanege={handleOnSearchChange} />
    </div>
  );
}

export default App;
