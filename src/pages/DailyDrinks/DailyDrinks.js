import { Bar } from 'react-chartjs-2';
import drinksImage from '../../images/drinks1.jpg';
import drinksImage2 from '../../images/drinks3.png';
// import FoodImage from '../images/food6.png';
import './DailyDrinks.css';

const DailyDrinksTracker = () => {
  // Daily drinks data
  const drinksData = [2, 3, 1, 0, 4, 2, 1];
  const caloriesData = [100, 150, 70, 0, 200, 100, 50];
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  // Total drinks and calories calculation
  const totalDrinks = drinksData.reduce((a, b) => a + b, 0);
  const totalCalories = caloriesData.reduce((a, b) => a + b, 0);

  // Chart data and options
  const drinksChartData = {
    labels: daysOfWeek,
    datasets: [
      {
        label: 'Drinks',
        data: drinksData,
        backgroundColor: '#2196F3',
      },
      {
        label: 'Calories',
        data: caloriesData,
        backgroundColor: '#FF9800',
      },
    ],
  };

  const drinksChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  // Daily drinks component
  return (
    <div className='containerDrinks'>
      <div className='daily-drinks-tracker'>
        <h2 className='daily-drinks-heading'>Daily Drinks Tracker</h2>
        <div className='daily-drinks-chart-container'>
          <Bar data={drinksChartData} options={drinksChartOptions} />
        </div>
        <div className='daily-drinks-totals'>
          <p className='daily-drinks-total'>Total drinks: {totalDrinks}</p>
          <p className='daily-calories-total'>Total calories: {totalCalories}</p>
        </div>
      </div>
      <img src={drinksImage2} className='drinksImages' alt='food' />
      <img src={drinksImage} className='drinksImages' alt='food' />
    </div>
  );
};

export default DailyDrinksTracker;
