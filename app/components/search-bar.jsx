"use client"

export default function Searchbar({ onSearch, searchQuery, setSearchQuery }) {
  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      onSearch(); // Call the onSearch prop without passing the searchQuery
    }
  };

  return (
    <div className="ml-10 mr-10">
      <input
        className="drop-shadow-xl p-1 block w-full rounded-md outline-[#000066] bg-gray-100 focus:bg-white"
        type="text"
        placeholder="Search Location"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />
      <button
        className="mt-2 bg-blue-500 text-white py-1 px-3 rounded-md cursor-pointer"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}
