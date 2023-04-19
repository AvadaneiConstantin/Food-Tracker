import React, { useState } from 'react';
import '../css/DailyWeight.css';

function DailyWeight() {
  // Define the weight data as an array of objects
  const [weightData, setWeightData] = useState([
    { month: 'January', day: 1, weight: 150 },
    { month: 'January', day: 2, weight: 148 },
    { month: 'January', day: 3, weight: 147 },
    { month: 'January', day: 4, weight: 148 },
    { month: 'January', day: 5, weight: 149 },
    // Add more rows for the remaining months
  ]);

  // Define a function to handle form submissions
  function handleFormSubmit(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the form data
    const month = event.target.month.value;
    const day = event.target.day.value;
    const weight = event.target.weight.value;

    // Add the new weight data to the weightData array
    setWeightData([...weightData, { month, day, weight }]);
  }

  return (
    <div id='containerWeight' className='containerDailyIntakeFood'>
      <h2>Daily weight tracker</h2>
      <form id='add-data-form' onSubmit={handleFormSubmit}>
        <p>Add a new Weight</p>
        <label htmlFor='month'>Month:</label>
        <select id='month' name='month'>
          <option value='January'>January</option>
          <option value='February'>February</option>
          <option value='March'>March</option>
          <option value='April'>April</option>
          <option value='May'>May</option>
          <option value='June'>June</option>
          <option value='July'>July</option>
          <option value='August'>August</option>
          <option value='September'>September</option>
          <option value='October'>October</option>
          <option value='November'>November</option>
          <option value='December'>December</option>
        </select>
        <label htmlFor='day'>Day:</label>
        <select name='day' id='day'>
          {[...Array(31)].map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>

        <label htmlFor='weight'>Weight:</label>
        <input type='number' name='weight' id='weight' required />

        <button type='submit' id='dataWeightButton'>
          Add Data
        </button>
      </form>

      <table id='weight-data-table'>
        <thead>
          <tr>
            <th>Month</th>
            <th>Day</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          {weightData.map((data, index) => (
            <tr key={index}>
              <td>{data.month}</td>
              <td>{data.day}</td>
              <td>{data.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Weight mounthly graphic</h2>
    </div>
  );
}

export default DailyWeight;
