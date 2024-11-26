//building out catalog search component
/*
utils:react-carousel moduel
take from ImageGallery
-This means we are pulling from an s3 bucket
Objects in Catalog bucket:
-CatalogA
-CatalogB

Data cannot be simply PDFS
The PDFs themselves can be in the bucket but it is not the data that we are pulling
When we make a query to our database of catalog.Items
-Call to the catalogs that match with input parameters
-Call to the objects that match the input parameters

Where is the data stored? Would it be simpler to just use an s3 bucket with aws SDK calls?
MongoDB calls will be cheaper. 
There needs to be a higher security if we are processing payment options
Adding up to a quote 


Catalog:{
CatalogX:[
    CatalogItem: {
        ID:xxxxxxx,
        Cost:xxxxx,
        Product Name:xxxxx,
        Product ImageKey:s3:urltoimage.com
        Associated Catalog: xxxxx,
        };
]
}


*/


import { useState } from 'react';

const App = () => {
  const [catalogName, setCatalogName] = useState('');
  const [catalogItem, setCatalogItem] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Replace with your actual API endpoint from API Gateway
  const API_URL = 'https://your-api-id.execute-api.region.amazonaws.com/search';

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    setResults([]);
    try {
      const queryParams = new URLSearchParams({
        ...(catalogName && { catalogName }),
        ...(catalogItem && { catalogItem }),
      });

      const response = await fetch(`${API_URL}?${queryParams}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setResults(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Catalog Search</h1>
      <div>
        <input
          type="text"
          placeholder="Catalog Name"
          value={catalogName}
          onChange={(e) => setCatalogName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Catalog Item"
          value={catalogItem}
          onChange={(e) => setCatalogItem(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      <div>
        {results.length > 0 ? (
          <ul>
            {results.map((item) => (
              <li key={item.catalogId}>
                <strong>{item.catalogName}</strong>: {item.catalogItem}
                <br />
                <img
                  src={`https://your-image-storage-service/${item.catalogImageKey}`}
                  alt={item.catalogItem}
                  style={{ width: '100px', height: '100px' }}
                />
              </li>
            ))}
          </ul>
        ) : (
          !loading && <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default App;
