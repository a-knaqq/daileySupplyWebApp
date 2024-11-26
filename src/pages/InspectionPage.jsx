const InspectionPage = () => {
  const inspections = [
    { id: 1, type: "Electrical Safety", date: "2024-11-01", status: "Completed" },
    { id: 2, type: "Fire Equipment", date: "2024-11-15", status: "Scheduled" },
    { id: 3, type: "Structural Integrity", date: "2024-11-22", status: "Pending" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-700 mb-4">Inspections</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {inspections.map((inspection) => (
          <div
            key={inspection.id}
            className="bg-gray-200 shadow-lg rounded-lg p-4 flex flex-col items-start hover:scale-105 transition-transform"
          >
            <h2 className="text-xl font-semibold text-gray-800">{inspection.type}</h2>
            <p className="text-gray-600">Date: {inspection.date}</p>
            <span
              className={`px-2 py-1 mt-2 text-sm font-medium rounded-full ${
                inspection.status === "Completed"
                  ? "bg-green-100 text-green-800"
                  : inspection.status === "Scheduled"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {inspection.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InspectionPage;
