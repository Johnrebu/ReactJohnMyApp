import React, { useState } from "react";
const EmployeeDirectory = () => {
  //Central Node: "State Management"
  const [employees, setEmployees] = useState([
    // employees (Array): Source of truth for employee data.
    { name: "Nathanael", age: 18, location: "Sealiyur", salary: 1000 },
    { name: "Jonathan", age: 23, location: "Bangalore", salary: 2000 },
    { name: "Jeyakumari", age: 46, location: "Ambattur", salary: 3000 },
    { name: "Cecil", age: 47, location: "Tambaram", salary: 5000 },
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  // searchQuery (String): Filters displayed data.
  const [sortColumn, setSortColumn] = useState(null);
  // sortColumn (String): Column used for sorting (e.g., "name").
  const [sortDirection, setSortDirection] = useState(1);
  // sortDirection (1/-1): Ascending/descending order.

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };
  //[User Types in Search] → Updates searchQuery → Triggers Re-render → Filters employees → Renders filteredEmployees

  const handleSort = (column) => {
    const direction = column === sortColumn ? -sortDirection : 1;
    setSortColumn(column);
    setSortDirection(direction);
  //[Click Header] → Check if same column → Toggle sortDirection → Sort employees → Update employees state → Re-render

    const sortedEmployees = [...employees].sort((a, b) => {
      if (a[column] < b[column]) return -1 * direction;
      if (a[column] > b[column]) return 1 * direction;
      return 0;
    });
    setEmployees(sortedEmployees);
  };

  const filteredEmployees = employees.filter((emp) =>
    Object.values(emp).some(
      (value) =>
        value.toString().toLowerCase().includes(searchQuery) ||
        value.toString().toUpperCase().includes(searchQuery)
    )
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Employee Directory</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
        className="border p-2 mb-4 w-full"
      />
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            {["name", "age", "location", "salary"].map((column) => (
              <th
                key={column}
                onClick={() => handleSort(column)}
                className="cursor-pointer border p-2"
              >
                {column.charAt(0).toUpperCase() + column.slice(1)} ↕
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((emp, index) => (
            <tr key={index}>
              <td className="border p-2">{emp.name}</td>
              <td className="border p-2">{emp.age}</td>
              <td className="border p-2">{emp.location}</td>
              <td className="border p-2">{emp.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeDirectory;
//



