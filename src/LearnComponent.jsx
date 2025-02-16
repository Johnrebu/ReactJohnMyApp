import React, { useState } from 'react';
import "./App.css";
// App component
// The App component is a functional component that renders a dummy table with filter functionality.
// It uses the useState hook to manage the filter input value and the filtered data.

function App() {
  // Dummy table data
  const data = [
    { id: 1, name: 'Arun', age: 28, role: 'Developer' },
    { id: 2, name: 'Archana', age: 32, role: 'Designer' },
    { id: 3, name: 'Johnson', age: 45, role: 'Manager' },
    { id: 4, name: 'Dinesh', age: 22, role: 'Doctor' },
    { id: 5, name: 'sachin', age: 38, role: 'cricketer' },
    { id: 6, name: 'Dhoni', age: 38, role: 'Engineer' },
    { id: 7, name: 'vijay', age: 28, role: 'Actor' },
    { id: 8, name: 'Ajith', age: 28, role: 'Car Racer' }
  ];
  // State variables

  const [filterText, setFilterText] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  // Handle filtering of data
  const handleFilter = (e) => {
    const value = e.target.value;
    setFilterText(value);
    // Filter data based on input value and update filteredData state
    // The filter function checks if the name or role of each item includes the input value.
    // It converts both the input value and the item values to lowercase for case-insensitive comparison.
    // The filtered data is then set in the filteredData state.
    // The filteredData state is used to display the filtered data in the table.
    // If no data is found based on the filter, a "No Data Found" message is displayed.
    // The handleFilter function is triggered when the user types in the filter input field.


    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase()) ||
      item.role.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };
  // Render the component
  // The App component renders a dummy table with filter functionality.
  // It displays the table data based on the filter input value.
  // The filter input is controlled by the filterText state.
  // The handleFilter function updates the filterText state and filters the data based on the input value.
  // The filtered data is displayed in the table.
  // If no data is found based on the filter, a "No Data Found" message is displayed.
  // The component is exported at the end.
  // The App component is now complete with the filter functionality.
  // You can test the filter by typing in the input field to search for names or roles in the table.
  // The table will update in real-time based on the filter input.
  // You can also modify the table data or add more data to test the filter with different values.
  // The filter is case-insensitive and checks for partial matches in both name and role fields.
  // You can customize the filter logic based on your requirements.
  // Feel free to experiment with the code and make changes as needed.
  // Happy coding!
  return (
    <div style={{ padding: '20px' }}>
      <h1>Dummy Table with Filter</h1>

       {/* Filter Input */}
      <input
        type="text"
        placeholder="Search by name or role..."
        value={filterText}
        onChange={handleFilter}
        style={{ marginBottom: '10px', padding: '8px', width: '300px' }}
      />

      {/* Table to display data */}
      <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Role</th>x
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.role}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center' }}>
                No Data Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
// 1. Importing React and useState hook from 'react' module:
// 2. Importing CSS file for styling the table:
// 3. Defining the App component:
// 4. Dummy table data:
// 5. Defining the state variables:
// 6. Handling the filter input:
// 7. Rendering the component:
// 8. Filter input:
// 9. Table to display data:
// 10. Table header:
// 11. Table body:
// 12. Displaying filtered data:
// 13. No data found message:
// 14. Exporting the App component:
