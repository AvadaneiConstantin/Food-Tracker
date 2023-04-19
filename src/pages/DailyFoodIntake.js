import React, { useState } from 'react';
import '../css/DailyFoodIntake.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const foodsList = [
  {
    name: 'Salmon',
    calories: 450,
  },
  {
    name: 'Broccoli',
    calories: 55,
  },
  {
    name: 'Sweet Potato',
    calories: 150,
  },
  {
    name: 'Chicken Breast',
    calories: 165,
  },
  {
    name: 'Quinoa',
    calories: 222,
  },
];

const DailyFoodIntake = () => {
  const [foods, setFoods] = useState(foodsList);
  const [portions, setPortions] = useState([1, 1, 1]);
  const [selectedFoods, setSelectedFoods] = useState([]);
  // const [selectedDate, setSelectedDate] = useState(new Date());
  const [dayValues, setDayValues] = useState({});
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [inputValue, setInputValue] = useState(1);
  const [currentWeek, setCurrentWeek] = useState(new Date());

  // const handleDateChange = date => {
  //   setSelectedDate(date);
  // };

  const handlePortionChange = (event, index) => {
    const updatedPortions = [...portions];
    updatedPortions[index] = Number(event.target.value) || 1;
    setPortions(updatedPortions);
  };

  const handleAddFoodTable = food => {
    const updatedSelectedFoods = [...selectedFoods];
    const index = updatedSelectedFoods.findIndex(item => item.name === food.name);
    const foodPortion = portions[foods.indexOf(food)] || 1; // <-- add this line to handle undefined portion value
    if (index >= 0) {
      updatedSelectedFoods[index].portions += foodPortion;
    } else {
      updatedSelectedFoods.push({ ...food, portions: foodPortion });
    }
    setSelectedFoods(updatedSelectedFoods);

    const caloriesTotal = updatedSelectedFoods.reduce((acc, food) => acc + food.calories * food.portions, 0);
    const inputElements = Array.from(document.querySelectorAll('.inputTracker'));
    inputElements.forEach(inputElement => {
      inputElement.value = Number(caloriesTotal.toFixed(2));
    });
  };

  const handleDeleteFoodTable = index => {
    const updatedFoods = [...foods];
    const updatedPortions = [...portions];
    updatedFoods.splice(index, 1);
    updatedPortions.splice(index, 1);
    setFoods(updatedFoods);
    setPortions(updatedPortions);
  };

  // calendar settings  ~~~~~~~~~~~~~~~~~~~~~~~~
  function handleAddFood(date) {
    if (date) {
      setSelectedDay(date); // update selectedDay first
      const dayValue = dayValues[date.toLocaleDateString()] || '';
      const mealValue = document.getElementById('meal-for-today').value || '';
      const totalCalories = selectedFoods.reduce((acc, food) => acc + food.calories * food.portions, 0);
      const newValue = `${mealValue} (calories: ${totalCalories})`;
      if (newValue !== dayValue) {
        setDayValues({ ...dayValues, [date.toLocaleDateString()]: newValue });
      }
    }
  }

  function handleResetDayValue(date) {
    setDayValues({
      ...dayValues,
      [date.toLocaleDateString()]: '',
    });
  }

  function generateDays() {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const startDate = new Date(currentWeek);
    startDate.setDate(startDate.getDate() - startDate.getDay() + 1); // Set start date to first day of the week
    return days.map((day, index) => {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + index);
      const className = index === currentWeek.getDay() - 1 ? 'selectedDay' : '';
      const dayValue = dayValues[date.toLocaleDateString()] || '';

      // check if the current day is the selected day
      if (selectedDay && date.getDate() === selectedDay.getDate()) {
        // pass the inputValue to the input field of the selected day
        return (
          <div key={day} className={className} onClick={() => setSelectedDay(date)}>
            <h3>
              {day} - {date.toLocaleDateString()}
            </h3>
            {selectedDay && date.getDate() === selectedDay.getDate() ? (
              <>
                <button onClick={() => handleAddFood(date)}>Add the food</button>
                <input
                  type='text'
                  value={dayValue}
                  onChange={e => setDayValues({ ...dayValues, [date.toLocaleDateString()]: e.target.value })}
                  style={{ minWidth: '400px', padding: '5px' }}
                />
                <button onClick={() => handleResetDayValue(date)}>Reset</button>
              </>
            ) : (
              <input
                type='text'
                value={dayValue}
                onChange={e => setDayValues({ ...dayValues, [date.toLocaleDateString()]: e.target.value })}
                style={{ minWidth: '400px', padding: '5px' }}
              />
            )}
          </div>
        );
      } else {
        return (
          <div key={day} className={className} onClick={() => setSelectedDay(date)}>
            <h3>
              {day} - {date.toLocaleDateString()}
            </h3>
            <button onClick={() => handleAddFood(date)}>Add the food</button>
            <input
              type='text'
              value={dayValue}
              onChange={e => setDayValues({ ...dayValues, [date.toLocaleDateString()]: e.target.value })}
              style={{ minWidth: '400px', padding: '5px' }}
            />
            <button onClick={() => handleResetDayValue(date)}>Reset</button>
          </div>
        );
      }
    });
  }

  // handle input value change
  function handleInputChange(e) {
    const newValue = Number(e.target.value);
    if (newValue >= 1 && newValue <= 9) {
      setInputValue(newValue);
    }
  }

  return (
    <div className='containerDailyIntakeFood'>
      <h2>Daily Food Intake Tracker</h2>
      <h4>Make your daily menu</h4>

      <table className='foodTable'>
        {/* <button className='addNewFood'>Add new food</button> */}
        <thead>
          <tr>
            <th>Food Name</th>
            <th>Food Calorie</th>
            <th>Portion ( 100 gr )</th>
            <th>Add to Menu</th>
            <th>Delete from table</th>
          </tr>
        </thead>
        <tbody>
          {foods.map((food, index) => (
            <tr key={index}>
              <td>{food.name}</td>
              <td>{food.calories}</td>
              <td>
                <input type='number' style={{ width: '70px' }} value={portions[index] || 1} min='1' max='9' onChange={event => handlePortionChange(event, index)} />x {food.name}
              </td>
              <td>
                <button onClick={() => handleAddFoodTable(food)}>Add</button>
              </td>
              <td>
                <button onClick={() => handleDeleteFoodTable(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <label>
          <span style={{ display: 'block' }}>Your today meal menu:</span>
          <input
            id='meal-for-today'
            type='text'
            style={{ minWidth: '800px', textAlign: 'center', resize: 'both', padding: '6px', borderRadius: '7px', border: '1px solid rgb(211, 208, 208)' }}
            value={selectedFoods.map(food => `${food.portions}x${food.name}`).join(', ')}
            readOnly
          />
        </label>
        <h4>Total calories: {selectedFoods.reduce((acc, food) => acc + food.calories * food.portions, 0)} (max = 2000)</h4>
      </div>
      {/* <Calendar onChange={handleDateChange} value={selectedDate} /> */}
      {/* <h2>Week {currentWeek.toLocaleDateString('en-US', { week: 'numeric' })}</h2> */}
      <div className='containerCalendar'>
        <div className='weeklyCalendar'>{generateDays()}</div>

        <div className='mounthCalendar'>
          <Calendar value={currentWeek} onChange={setCurrentWeek} />
        </div>
      </div>
      {/* <form onSubmit={e => e.preventDefault()}>
      </form> */}
    </div>
  );
};

export default DailyFoodIntake;
