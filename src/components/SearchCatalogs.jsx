import { useState, useEffect } from "react";

const SearchCatalogs = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10); // Define page size
  const [results, setResults] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  // Mock catalog data
  const mockCatalogData = [
    {
      catalog_id: "catalog-1",
      catalog_name: "Electronics Catalog",
      items: [
        { id: "item-1", name: "Smartphone" },
        { id: "item-2", name: "Laptop" },
        { id: "item-3", name: "Headphones" },
      ],
    },
    {
      catalog_id: "catalog-2",
      catalog_name: "Furniture Catalog",
      items: [
        { id: "item-4", name: "Sofa" },
        { id: "item-5", name: "Dining Table" },
        { id: "item-6", name: "Chair" },
      ],
    },
    {
      catalog_id: "catalog-3",
      catalog_name: "Clothing Catalog",
      items: [
        { id: "item-7", name: "T-shirt" },
        { id: "item-8", name: "Jeans" },
        { id: "item-9", name: "Jacket" },
      ],
    },
  ];

  // Function to simulate searching through multiple catalogs
  const fetchMockResults = () => {
    setLoading(true);
    setTimeout(() => {
      const filteredResults = [];
      // Loop through catalogs and filter items by query
      mockCatalogData.forEach((catalog) => {
        catalog.items.forEach((item) => {
          if (item.name.toLowerCase().includes(query.toLowerCase())) {
            filteredResults.push({
              catalog_name: catalog.catalog_name,
              catalog_id: catalog.catalog_id,
              item_id: item.id,
              item_name: item.name,
            });
          }
        });
      });

      setResults(filteredResults);
      setTotalResults(filteredResults.length);
      setTotalPages(Math.ceil(filteredResults.length / pageSize)); // Calculate total pages

      setLoading(false);
    }, 500); // Simulate network delay
  };

  // Fetch results when the page or query changes
  useEffect(() => {
    if (query) {
      fetchMockResults(); // Use mock data instead of fetching from an API
    } else {
      setResults([]); // Clear results if no query
      setTotalResults(0);
      setTotalPages(1);
    }
  }, [query, page]);

  // Handlers for search and pagination
  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1); // Reset to first page on new search
    fetchMockResults(); // Use mock data instead of fetching from an API
  };

  const handleNextPage = () => {
    if (page < totalPages) setPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) setPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <form className="flex items-center space-x-4 mb-6" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search catalogs..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="p-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 disabled:bg-gray-400"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center text-gray-500">Loading...</p>}

      {query && results.length > 0 && (
        <div className="bg-white shadow-lg rounded-lg p-6">
          <p className="text-lg font-semibold mb-4">Results: {totalResults}</p>
          <ul className="space-y-4">
            {results.map((result) => (
              <li key={result.item_id} className="border-b border-gray-200 pb-4">
                <p className="text-gray-800 font-medium">{result.item_name}</p>
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold">Catalog:</span> {result.catalog_name} 
                  <span className="ml-2 text-gray-400">ID: {result.item_id}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* No results message */}
      {!query && (
        <p className="text-center text-gray-500 mt-4">Please enter a search term to begin.</p>
      )}

      <div className="flex justify-between items-center mt-6">
        <button
          onClick={handlePreviousPage}
          disabled={page <= 1 || loading}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <span className="text-sm text-gray-600">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={page >= totalPages || loading}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SearchCatalogs;
