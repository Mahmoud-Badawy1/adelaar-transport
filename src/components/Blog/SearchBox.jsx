const SearchBox = () => {
    return (
      <div className="flex items-center border border-gray-300 h-14 overflow-hidden max-w-md">
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 px-4 py-2 text-sm text-gray-700 placeholder-gray-500 focus:outline-none"
        />
        <button className="bg-orange hover:bg-orange-600 text-white px-4 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85a1.007 1.007 0 0 0-.115-.098zm-5.442.656a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z" />
          </svg>
        </button>
      </div>
    );
  };
  
  export default SearchBox;
  