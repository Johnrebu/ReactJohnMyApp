import React, { useState } from "react";
const EmployeeDirectory = () => {
  // 1.State Initialization:
  // The component uses the useState hook to manage four state variables:
  // employees: An array of employee objects with their details.
  // searchQuery: A string to store the current search input.
  // sortColumn: Stores the column currently being sorted.
  // sortDirection: Indicates the direction of sorting (1 for ascending, -1 for descending).
  const [employees, setEmployees] = useState([
    { name: "Nathanael", age: 18, location: "Sealiyur", salary: 1000 },{ name: "Jonathan", age: 23, location: "Bangalore", salary: 2000 },
    { name: "Jeyakumari", age: 46, location: "Ambattur", salary: 3000 },{ name: "Cecil", age: 47, location: "Tambaram", salary: 5000 }]);
  const [searchQuery  , setSearchQuery]   = useState("");
  const [sortColumn   , setSortColumn]    = useState(null);
  const [sortDirection, setSortDirection] = useState(1);

  const handleSearch = (event) => {setSearchQuery(event.target.value)};

//   Color Coding (for annotations):
// 🔵 State Variables
// 🟢 User Actions
// 🟠 Data Flow
// 🔴 Re-render Triggers
  // 2.Event Handlers:
  // handleSearch: Updates the searchQuery state when the user types in the search input.
  // handleSort: Manages the sorting logic when a table header is clicked.
  // It determines the sort direction and updates the sortColumn and sortDirection states.
  // It then creates a sorted copy of the employees array and updates the employees state.
  // 🔍 User types "20" in search:
  //    ✅ handleSearch() updates searchQuery → "20"
  //    🔄 Re-render triggers:
  //    🔍 filteredEmployees = employees.filter(...)
  //    ✅ Finds Jonathan (salary 2000)
  //    🖥️ RENDER: Only 1 row (Jonathan)
  const handleSort = (column) => {const direction = column === sortColumn ? -sortDirection : 1;
    setSortColumn(column);
    setSortDirection(direction);
    // 5.Sorting Logic:
    // The handleSort function is triggered when a table header is clicked.
    // It determines the sort direction based on the current column and direction.
    // If the same column is clicked again, the direction is reversed.
    // The employees array is sorted based on the column and direction.
    // The sorted array is then updated in the employees state.
    // 🖱️ User clicks on "Name" header
    //    ✅ handleSort("name") updates sortColumn → "name", sortDirection → 1
    //    ✅ Sorts employees by name in ascending order
    //    🖥️ RENDER: Table rows sorted by name (A-Z)
    // 🖱️ User clicks on "Name" header again
    //    ✅ handleSort("name") updates sortColumn → "name", sortDirection → -1
    //    ✅ Sorts employees by name in descending order
    //    🖥️ RENDER: Table rows sorted by name (Z-A)
    // 🖱️ User clicks on "Age" header
    //    ✅ handleSort("age") updates sortColumn → "age", sortDirection → 1
    //    ✅ Sorts employees by age in ascending order
  
    const sortedEmployees = [...employees].sort((a, b) => {
      if (a[column] < b[column]) return -1 * direction;
      if (a[column] > b[column]) return  1 * direction;
      return 0;
    });
    setEmployees(sortedEmployees);
  };
    const filteredEmployees = employees.filter(emp => 
    Object.values(emp).some(value => value.toString()
    .toLowerCase().includes(searchQuery)||value.toString()
    .toUpperCase().includes(searchQuery)));
  // 3.Filtered Employees:
  // The filteredEmployees array is created by filtering the employees array based on the searchQuery.
  // It checks if any of the values in the employee object contain the searchQuery string.
  // The search is case-insensitive and checks for both lower and upper case matches.
  // 📝 User types "am":
  //    ✅ Finds "Jonathan" (location: "Bangalore")
  //    ✅ Finds "Jeyakumari" (location: "Ambattur")
  //    ✅ Finds "Cecil" (location: "Tambaram")
  //    🖥️ RENDER: 3 rows (Jonathan, Jeyakumari, Cecil)
  //    🔄 Table headers show "↕" (neutral sort)
  // 4.Table Rendering:
  // The table is rendered with the headers and data rows.
  // The headers are clickable and trigger the handleSort function when clicked.
  // The data rows are generated based on the filteredEmployees array.
  // The table is responsive and adjusts to the content width.
  // 🖥️ User sees a table with 3 rows (filtered by search)
  // 🖱️ User clicks on "Name" header
  //    ✅ Sorts employees by name in ascending order
  //    🖥️ RENDER: Table rows sorted by name (A-Z)
  // 🖱️ User clicks on "Name" header again
  //    ✅ Sorts employees by name in descending order
  //    🖥️ RENDER: Table rows sorted by name (Z-A)
  // 🖱️ User clicks on "Age" header
  //    ✅ Sorts employees by age in ascending order
  //    🖥️ RENDER: Table rows sorted by age (1-47)
  // 🖱️ User clicks on "Salary" header
  //    ✅ Sorts employees by salary in ascending order
  //    🖥️ RENDER: Table rows sorted by salary (1000-5000)
  return (
      <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Employee Directory</h1>
      <input type="text" placeholder="Search..." value={searchQuery} onChange={handleSearch} className="border p-2 mb-4 w-full"/>
      {/* //In the above code, we are displaying the employee directory with a
      search input field and a table of employees. //We are using the useState
      hook to manage the employees, search query, sort column, and sort
      direction states. //We are initializing the employees state with an array
      of employee objects containing the name, age, location, and salary
      properties. //We are initializing the search query, sort column, and sort
      direction states with null, 1, and 1 values respectively. */}
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>{["name", "age", "location", "salary"].map((column) => (<th key={column} onClick={() => handleSort(column)} 
          className="cursor-pointer border p-2"> {column.charAt(0).toUpperCase() + column.slice(1)} ↕ </th>))}</tr>
        </thead>
        <tbody>
          {filteredEmployees.map((emp, index) => (<tr key={index}>
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
          //in the above code, we are sorting the employees based on the name, age, location, and salary. We are also filtering the employees based on the search query.
            //We are displaying the employees in a table format with the name, age, location, and salary as columns.
            //We are also displaying the column headers with the name, age, location, and salary as the column names.
            //We are also displaying the sort direction arrow (↕) next to the column name to indicate the sort direction.
            //We are handling the search query change event and updating the search query state accordingly.
            //We are handling the column header click event and updating the sort column and sort direction states accordingly.
            //We are sorting the employees based on the sort column and sort direction.
            //We are filtering the employees based on the search query.
            //We are rendering the table rows with the filtered employees data.
export default EmployeeDirectory;
//   1. Overview

// This document analyses a React component designed to display and interact with employee data. The component, EmployeeDirectory, provides functionality for searching, sorting, and viewing employee records within a table format. It leverages React's useState hook to manage the component's internal state and dynamically render the user interface.

// 2. Core Functionality and State Management

// The component relies heavily on the useState hook to manage its dynamic data. Key state variables are:

// employees: An array of employee objects. Each object contains employee details: name, age, location, and salary. This array acts as the source of truth for the employee data displayed.
// searchQuery: A string representing the current text entered in the search input. This is used to filter the displayed employees.
// sortColumn: A string indicating which column is currently being used to sort the employee data (e.g. "name", "age", "location", or "salary").
// sortDirection: A number (1 or -1) specifying the direction of the current sort (ascending or descending, respectively).
// The component dynamically re-renders whenever these state variables change, allowing for a responsive user experience.

// 3. Event Handling

// The component uses two event handlers to manage user interactions:

// handleSearch: This function is triggered when the user types in the search input field. It updates the searchQuery state with the new input value. As per the code commentary, “handleSearch() updates searchQuery → "20"”.
// handleSort: This function is triggered when the user clicks on a table header. It manages the sorting of employee data:
// It determines the sort direction. If the same column is clicked repeatedly, the sort direction toggles (ascending to descending, or vice-versa). The code notes “If the same column is clicked again, the direction is reversed”.
// It updates both the sortColumn and sortDirection states.
// It creates a new sorted copy of the employees array using the JavaScript sort() method (this ensures immutability), based on the selected column and sort direction. The key part of this is seen as const sortedEmployees = [...employees].sort((a, b) => { ... }).
// Finally, the employees state is updated with the sorted copy.
// 4. Data Filtering

// The component dynamically filters the displayed employee data based on the searchQuery.

// A new filteredEmployees array is created by using the filter() method on the employees array.
// The filter function checks if the searchQuery (case-insensitive) is present in any of the values within each employee object using the some() method. Both upper and lower case versions are checked. The code comment says: "It checks if any of the values in the employee object contain the searchQuery string. The search is case-insensitive and checks for both lower and upper case matches."
// The component re-renders to display only the filteredEmployees.
// 5. Table Rendering

// The React component uses JSX to generate an HTML table:

// The table headers are generated dynamically, iterating over an array of column names: ["name", "age", "location", "salary"].
// Each header is clickable, and a click triggers the handleSort() function, passing the clicked column as an argument. As per the code, it triggers onClick={() => handleSort(column)}.
// The table body is dynamically generated based on the filteredEmployees array.
// Each row corresponds to an employee and displays their name, age, location, and salary in table cells.
// The table is styled with basic CSS classes such as min-w-full bg-white border border-gray-200.
// 6. Key Concepts & Takeaways

// State Management: The component showcases the use of useState for managing UI state, including complex objects like employee lists and simple state like search strings.
// Immutability: The sorting logic uses the spread operator (...) to create a new array before sorting, ensuring the original employees array remains unchanged, a best practice in React.
// Dynamic Rendering: The component dynamically re-renders the table based on changes to the search query or sort order.
// Case-Insensitive Search: The filtering logic incorporates case-insensitive search using .toLowerCase() and .toUpperCase() allowing for flexible searching for the user.
// Interactive Table: The table is designed to be interactive, allowing the user to sort by any column simply by clicking headers.
// Clear Code Comments: There is useful commenting within the code itself, explaining key pieces of functionality and logic.
// 7. Areas for Potential Improvement

// Data Fetching: This example uses a hardcoded employees array. A more practical version would likely fetch data from an external source via an API.
// Error Handling: No explicit error handling is implemented for cases where the employee data does not conform to the expected structure or external data fetch fails.
// Sorting on Non-String/Number: The sorting logic assumes the sortable data is either a string or a number. More complex sorting needs custom comparator functions.
// Advanced Styling: There are only minimal styles applied in the code itself. A full implementation would have more detailed styling using CSS or a UI library like TailwindCSS.
// 8. Conclusion

// The provided code snippet is a solid implementation of a basic interactive employee directory using React. It demonstrates many key concepts like state management, event handling, and dynamic rendering using the useState hook and is fully functional for small data sets. The code is well-commented, which aids in its understanding. The key function areas, filtering and sorting, are also implemented efficiently and clearly.



