import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2'; 
import "../css/ProgressReports.css";
import Chart from 'chart.js/auto';


function ProgressReports() {

  // Food intake progress report state variables
  const [dailyCalorieGoal, setDailyCalorieGoal] = useState(2000);
  const [weeklyCalorieGoal, setWeeklyCalorieGoal] = useState(14000);
  const [calorieIntakeData, setCalorieIntakeData] = useState([]);

  // Exercise progress report state variables
  const [dailyExerciseGoal, setDailyExerciseGoal] = useState(30);
  const [weeklyExerciseGoal, setWeeklyExerciseGoal] = useState(210);
  const [exerciseData, setExerciseData] = useState([]);

  // Weight progress report state variables
  const [weightGoal, setWeightGoal] = useState(150);
  const [weightData, setWeightData] = useState([]);

  useEffect(() => {
    // Fetch calorie intake data for the past week and set it in state
    const calorieIntake = [1800, 1900, 2100, 2200, 2000, 1900, 1800];
    setCalorieIntakeData(calorieIntake);

    // Fetch exercise data for the past week and set it in state
    const exerciseData = [25, 30, 30, 35, 40, 40, 45];
    setExerciseData(exerciseData);

    // Fetch weight data for the past month and set it in state
    const weightData = [155, 154, 152, 153, 151, 150, 148, 150, 149, 148, 147, 146, 146, 145];
    setWeightData(weightData);
  }, []);

  // Chart options for calorie intake chart
  const calorieIntakeOptions = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 200
        }
      }
    }
  };

  // Chart options for exercise chart
  const exerciseOptions = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 5
        }
      }
    }
  };

  // Chart options for weight chart
  const weightOptions = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 5
        }
      }
    }
  };

  return (
    <div className="containerProgressReports">
      {/* Food intake progress report */}
      <h2>Food intake progress report</h2>
      <div className="dailyGoal">
        <p>Daily calorie goal: <span className="daily-calorie-goal">{dailyCalorieGoal}</span></p>
        <p>Progress: <span className="daily-calorie-goal">{calorieIntakeData.reduce((a, b) => a + b, 0)} / {dailyCalorieGoal}</span></p>
        <p>Weekly calorie goal: <span className="daily-calorie-goal">{weeklyCalorieGoal}</span></p>
        <p>Progress:<span className="daily-calorie-goal"> {calorieIntakeData.reduce((a, b) => a + b, 0)} / {weeklyCalorieGoal}</span></p>
        <Line className="tableCalories" data={{labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'], datasets: [{ label: 'Calorie intake',
        data: calorieIntakeData }]}} options={calorieIntakeOptions}  />
        </div>
          {/* Exercise progress report */}
  <h2>Exercise progress report</h2>
  <div className="dailyGoal">
    <p>Daily exercise goal: <span className="daily-calorie-goal">{dailyExerciseGoal}</span></p>
    <p>Progress: <span className="daily-calorie-goal"> {exerciseData.reduce((a, b) => a + b, 0)} / {dailyExerciseGoal}</span></p>
    <p>Weekly exercise goal:<span className="daily-calorie-goal"> {weeklyExerciseGoal}</span></p>
    <p>Progress: <span className="daily-calorie-goal">{exerciseData.reduce((a, b) => a + b, 0)} / {weeklyExerciseGoal}</span></p>
    <Line data={{labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'], datasets: [{ label: 'Exercise duration', data: exerciseData }]}} options={exerciseOptions} />
  </div>

  {/* Weight progress report */}
  <h2>Weight progress report</h2>
  <div className="dailyGoal">
    <p>Weight goal:<span className="daily-calorie-goal"> {weightGoal}</span></p>
    <p>Progress: <span className="daily-calorie-goal">{weightData[weightData.length - 1]} / {weightGoal}</span></p>
    <Line data={{labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'], datasets: [{ label: 'Weight', data: weightData }]}} options={weightOptions} />
  </div>
</div>
);
}

export default ProgressReports;
