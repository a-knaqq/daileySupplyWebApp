import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AccountGrid = () => {
  const [accounts, setAccounts] = useState([]);

  // Mock API fetch
  useEffect(() => {
    const fetchAccounts = async () => {
      const mockData = [
        {
          id: 1,
          name: "General Electric",
          services: [
            { name: "Inspections", active: 3, total: 2 },
            { name: "Supply", active: 1, total: 1 },
            { name: "Trainings", active: 0, total: 0 },
          ],
        },
        {
          id: 2,
          name: "Eriez",
          services: [
            { name: "Inspections", active: 3, total: 2 },
            { name: "Supply", active: 1, total: 1 },
            { name: "Trainings", active: 0, total: 0 },
          ],
        },
        {
          id: 3,
          name: "Kormatsu",
          services: [
            { name: "Inspections", active: 3, total: 2 },
            { name: "Supply", active: 1, total: 1 },
            { name: "Trainings", active: 0, total: 0 },
          ],
        },
        {
          id: 4,
          name: "Company Z",
          services: [
            { name: "Inspections", active: 3, total: 2 },
            { name: "Supply", active: 1, total: 1 },
            { name: "Trainings", active: 0, total: 0 },
          ],
        },
      ];
      setTimeout(() => setAccounts(mockData), 0);
    };

    fetchAccounts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {accounts.map((account) => (
        <div
          key={account.id}
          className="bg-gray-100 border border-gray-300 rounded-lg shadow-md p-4"
        >
          {/* Account Title */}
          <Link
            to={`/details/${account.id}`}
            className="text-lg font-semibold text-gray-800 mb-2 block hover:text-blue-600 transition duration-300"
          >
            {account.name}
          </Link>
          <hr className="border-gray-300 mb-4" />

          {/* Services */}
          <div className="space-y-4">
            {account.services.map((service, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white rounded-md p-2 shadow-sm"
              >
                {/* Service Name */}
                <Link
                  to={`/${service.name.toLowerCase()}/${account.id}`}
                  className="text-gray-800 font-medium hover:text-blue-600"
                >
                  {service.name}
                </Link>

                {/* Stats */}
                <div className="flex space-x-4">
                  <span className="text-sm text-red-600">
                    Active: <span className="font-bold">{service.active}</span>
                  </span>
                  <span className="text-sm text-green-600">
                    Total: <span className="font-bold">{service.total}</span>
                  </span>
                </div>

                {/* Toggle Switch */}
                <div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-gray-300 peer-focus:outline-none rounded-full peer-checked:bg-green-500 peer-checked:after:translate-x-4 peer-checked:after:bg-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccountGrid;
