import "./searchbar.css";

const SearchBar = () => {
  return (
    <div className="search_wrapper">
      <input
        type="text"
        placeholder="Search by Name or Location"
        name="search"
      />
    </div>
  );
};

export default SearchBar;
