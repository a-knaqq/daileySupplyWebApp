const TrainingsPage = () => {
  const trainings = [
    { id: 1, employee: "John Doe", task: "Machine Safety", status: "Completed" },
    { id: 2, employee: "Jane Smith", task: "Fire Drill", status: "Scheduled" },
    { id: 3, employee: "Mike Johnson", task: "First Aid", status: "Pending" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-700 mb-4">Trainings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trainings.map((training) => (
          <div
            key={training.id}
            className="bg-gray-200 shadow-lg rounded-lg p-4 flex flex-col items-start hover:scale-105 transition-transform"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {training.employee}
            </h2>
            <p className="text-gray-600">Task: {training.task}</p>
            <span
              className={`px-2 py-1 mt-2 text-sm font-medium rounded-full ${
                training.status === "Completed"
                  ? "bg-green-100 text-green-800"
                  : training.status === "Scheduled"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {training.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingsPage;
