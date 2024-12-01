import { useState } from "react";
import RecipeResults from "./RecipeResults";
import "./Search.css";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  
 

  const handleClick = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch`+
      `?apiKey=a7552629b1db4a9997c06bd7fa777b7d&query=${searchQuery}`);
    const responseJSON = await response.json();
    setSearchResults(responseJSON.results);
  };

  return (
    <>
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Type ingredients..."
          onChange={(e) => setSearchQuery(e.target.value)} />
        <button onClick={handleClick}>Search</button>
      </div>
      {searchResults && <RecipeResults recipes={searchResults} />}
    </>
  );
};

export default Search;