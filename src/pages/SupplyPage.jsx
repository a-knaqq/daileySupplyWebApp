const SupplyPage = () => {
  const supplies = [
    { id: 1, name: "Wiring Kit", quantity: 50, lastUpdated: "2024-11-20" },
    { id: 2, name: "Safety Gloves", quantity: 120, lastUpdated: "2024-11-18" },
    { id: 3, name: "Fire Extinguishers", quantity: 30, lastUpdated: "2024-11-15" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-700 mb-4">Supplies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {supplies.map((supply) => (
          <div
            key={supply.id}
            className="bg-gray-200 shadow-lg rounded-lg p-4 flex flex-col items-start hover:scale-105 transition-transform"
          >
            <h2 className="text-xl font-semibold text-gray-800">{supply.name}</h2>
            <p className="text-gray-600">Quantity: {supply.quantity}</p>
            <p className="text-gray-600">Last Updated: {supply.lastUpdated}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupplyPage;
