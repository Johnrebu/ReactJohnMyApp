import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './components/ui/card'

const ComponentVisualization = () => {
  // Sample data and state management demo
  const [currentStep, setCurrentStep] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [employees, setEmployees] = useState([
    { name: "Nathanael", age: 18, location: "Sealiyur", salary: 1000 },
    { name: "Jonathan", age: 23, location: "Bangalore", salary: 2000 },
    { name: "Jeyakumari", age: 46, location: "Ambattur", salary: 3000 },
    { name: "Cecil", age: 47, location: "Tambaram", salary: 5000 }
  ]);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState(1);

  const steps = [
    {
      title: "1. Initial State Setup",
      code: `const [employees, setEmployees] = useState([...]);
const [searchQuery, setSearchQuery] = useState("");
const [sortColumn, setSortColumn] = useState(null);
const [sortDirection, setSortDirection] = useState(1);`,
      description: "Component initializes with employee data and state variables for search and sort functionality"
    },
    {
      title: "2. Search Implementation",
      code: `const handleSearch = (event) => {
  setSearchQuery(event.target.value)
};

const filteredEmployees = employees.filter(emp => 
  Object.values(emp).some(value => 
    value.toString().toLowerCase().includes(searchQuery)
  )
);`,
      description: "Search filters employees across all fields as user types"
    },
    {
      title: "3. Sort Implementation",
      code: `const handleSort = (column) => {
  const direction = column === sortColumn ? -sortDirection : 1;
  setSortColumn(column);
  setSortDirection(direction);

  const sortedEmployees = [...employees].sort((a, b) => {
    if (a[column] < b[column]) return -1 * direction;
    if (a[column] > b[column]) return 1 * direction;
    return 0;
  });
  setEmployees(sortedEmployees);
};`,
      description: "Clicking column headers sorts data in ascending/descending order"
    }
  ];

  const handleSort = (column) => {
    const direction = column === sortColumn ? -sortDirection : 1;
    setSortColumn(column);
    setSortDirection(direction);
    
    const sortedEmployees = [...employees].sort((a, b) => {
      if (a[column] < b[column]) return -1 * direction;
      if (a[column] > b[column]) return 1 * direction;
      return 0;
    });
    setEmployees(sortedEmployees);
  };

  const filteredEmployees = employees.filter(emp => 
    Object.values(emp).some(value => 
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Step {currentStep}: {steps[currentStep - 1].title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-100 p-4 rounded-md mb-4">
            <pre className="whitespace-pre-wrap">{steps[currentStep - 1].code}</pre>
          </div>
          <p className="mb-4">{steps[currentStep - 1].description}</p>
          <div className="flex gap-2">
            <button 
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
              disabled={currentStep === 1}
            >
              Previous
            </button>
            <button 
              onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
              disabled={currentStep === steps.length}
            >
              Next
            </button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Live Demo</CardTitle>
        </CardHeader>
        <CardContent>
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
            className="border p-2 mb-4 w-full rounded"
          />
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                {['name', 'age', 'location', 'salary'].map((column) => (
                  <th 
                    key={column} 
                    onClick={() => handleSort(column)}
                    className="cursor-pointer border p-2 bg-gray-50"
                  >
                    {column.charAt(0).toUpperCase() + column.slice(1)}
                    {sortColumn === column && (sortDirection === 1 ? ' ↓' : ' ↑')}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((emp, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border p-2">{emp.name}</td>
                  <td className="border p-2">{emp.age}</td>
                  <td className="border p-2">{emp.location}</td>
                  <td className="border p-2">${emp.salary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ComponentVisualization;