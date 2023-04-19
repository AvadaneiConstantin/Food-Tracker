import FoodImage from './images/food6.png';
import ScrollNavbar from './pages/ScrollNavbar/ScrollNavbar';
// import DailyFood from './pages/DailyFood';
import DailyDrinks from './pages/DailyDrinks/DailyDrinks.js';
import DailyFoodIntake from './pages/DailyFoodIntake';
import ExerciseTracker from './pages/ExerciseTracker';
import ProgressReports from './pages/ProgressReports';
// import DailyDrinks from './pages/DailyDrinks/DailyDrinks';
import DailyWeight from './pages/DailyWeight';
import LoginForm from './pages/Login/Login';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <LoginForm />
      <ScrollNavbar />
      <div className='container'>
        <div className='topbar'>
          <div class='logo'>
            <h2>Health Tracker</h2>
          </div>
          <div className='search'>
            <input type='text' name='search' placeholder='search here' />
            <label for='search'>
              <i className='fas fa-search'></i>
            </label>
          </div>

          {/* <div className='user'><img src="./images/user.jpg" alt="" /></div> */}
        </div>
        <div className='sidebar'>
          <ul>
            <li>
              <a href='#'>
                <i className='fas fa-th-large'></i>
                <div>
                  <b>Dashboard</b>
                </div>
              </a>
            </li>
            <li>
              <a href='#'>
                <i className='fas fa-utensils'></i>
                <div>Meal plan</div>
              </a>
            </li>
            <li>
              <a href='#'>
                <i className='fa fa-list-alt'></i>
                <div>Recipes</div>
              </a>
            </li>
            <li>
              <a href='#'>
                <i className='fas fa-biking'></i>
                <div>Fitness</div>
              </a>
            </li>
            <li>
              <a href='#'>
                <i className='fas fa-bacon'></i>
                <div>Food tips</div>
              </a>
            </li>
            <li>
              <a href='#'>
                <i className='fab fa-android'></i>
                <div>Healthy challenges</div>
              </a>
            </li>
          </ul>
        </div>
        <div className='main'>
          <div className='cards'>
            <Link className='card' to='/daily-food-intake' style={{ textDecoration: 'none' }}>
              <div className='card-content' id='cardOne'>
                <div className='cardImage'></div>
                <div className='card-name'>Daily Food Intake Tracker</div>
              </div>
              <div className='icon-box'>
                <i className='fa fa-edit'></i>
              </div>
            </Link>
            <div className='card'>
              <Link className='card-content' to='/daily-weight' style={{ textDecoration: 'none' }}>
                <div className='cardImage'></div>
                <div className='card-name'>Daily Weight Tracker</div>
              </Link>
              <div className='icon-box'>
                <i className='fas fa-weight-hanging'></i>
              </div>
            </div>
            <Link className='card' to='/exercise-tracker' style={{ textDecoration: 'none' }}>
              <div className='card-content'>
                <div className='cardImage'></div>
                <div className='card-name'>Daily Exercise Tracker</div>
              </div>
              <div className='icon-box'>
                <i className='fas fa-biking'></i>
              </div>
            </Link>
            <Link className='card' to='/progress-reports' style={{ textDecoration: 'none' }}>
              <div className='card-content'>
                <div className='cardImage'></div>
                <div className='card-name'>Progress Reports</div>
              </div>
              <div className='icon-box'>
                <i className='fa fa-percent'></i>
              </div>
            </Link>
            <Link className='card' to='/daily-drinks' style={{ textDecoration: 'none' }}>
              <div className='card-content'>
                <div className='cardImage'></div>
                <div className='card-name'>Daily drinks tracker</div>
              </div>
              <div className='icon-box'>
                <i className='fas fa-glass-martini-alt'></i>
              </div>
            </Link>
          </div>

          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  contain for different pages ~~~~~~~~~~~~~~~~~~~~~~~~ */}
          <div className='containerPagesAndContain'>
            <Routes>
              {/* <Route path='/daily-food' element={<DailyFood />} /> */}
              <Route path='/daily-food-intake' element={<DailyFoodIntake />} />
              <Route path='/exercise-tracker' element={<ExerciseTracker />} />
              <Route path='/progress-reports' element={<ProgressReports />} />
              <Route path='/daily-drinks' element={<DailyDrinks />} />
              <Route path='/daily-weight' element={<DailyWeight />} />
            </Routes>
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  3 graphics divs  |~~~~~~~~~~~~~~~~~~~~~~~~ */}
            <div className='containerGraphics'>
              <div className='containerDiv'>
                <div className='photoContain containOne'></div>
                <p>Daily food intake: </p> <span> Last week</span>
                <div className='photoUpdate'>
                  <span>updated: 1 day(s) ago</span>
                </div>
              </div>
              <div className='containerDiv'>
                <div className='photoContain containTwoo'></div>
                <p>Daily exercise: </p> <span> Last year</span>
                <div className='photoUpdate'>
                  <span>updated: today</span>
                </div>
              </div>
              <div className='containerDiv'>
                <div className='photoContain containThree'></div>
                <p>Progress report: </p>
                <span> Last year</span>
                <div className='photoUpdate'>
                  <span>updated: while you watch</span>
                </div>
              </div>
            </div>

            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  continut dashboards  ~~~~~~~~~~ */}
            <div className='charts'>
              <div className='chart'>
                <div className='containerNormalContain'>
                  `<h2 style={{ margin: '30px' }}>How can the popular foods benefit our health?</h2>
                  <p style={{ fontSize: '18px' }}>
                    Though the field of medicine continues to advance and branch out in many ways, nutritionists and health experts continue to praise the benefits of certain
                    foods. In fact, eating healthfully has been shown to reduce the risk of obesity, cardiovascular illnesses, and even certain types of cancer.
                  </p>
                  {/* <img src="./images/food6.png"style=" width: 100%;"> */}
                  {/* <img style={{width: "500px"}} src="./images/user.jpg" alt="" />  */}
                  <img src={FoodImage} alt='food' style={{ width: '100%' }} />
                  {/* <div className="contentImage">
            <img src="./images/food6.png" alt="food" />
            </div> */}
                  {/* background-image: url("./images/user.jpg"); */}
                  <p>
                    We provide a cornucopia of delicious and nutritious options for individuals who wish to boost their health by eating healthfully. Below is a list of foods along
                    with information regarding their potential health benefits. Note that this article contains summaries and you should click through to read individual articles
                    containing the full list of possible health benefits.
                  </p>
                  <h2>
                    <b>Almonds</b>
                  </h2>
                  {/* <img src="./images/almonds.png"style="margin-left: 300px; "> */}
                  <p>
                    Almonds are a rich source of vitamin E, copper, magnesium, good quality protein, and healthy unsaturated fatty acids. Studies have revealed that almonds can
                    potentially help prevent cardiovascular diseasesTrusted Source, cut the risk of cancer, and help prolong life.
                  </p>
                  <h2>
                    <b>Apples</b>
                  </h2>
                  {/* <img src="./images/apples.png"style="margin-left: 300px; "> */}
                  <p>
                    Apples are sometimes called “nutritional powerhouses” because of their impressive nutritional profile. Apples contain about 14 percent of our daily needs of
                    Vitamin C (a powerful natural antioxidant), B-complex vitamins, dietary fiber, phytonutrients (which help protect the body from the detrimental effects of free
                    radicals), and minerals such as calcium and potassium. Studies have revealed that eating apples can potentially help prevent dementiaTrusted Source and reduce
                    the risk of strokeTrusted Source and diabetes.
                  </p>
                  <p>... the list can go on ...</p>
                </div>
              </div>
              {/* <div class="chart doughnut-chart">
                    <h2>Employees</h2>
                    <div>
                        <canvas id="doughnut"></canvas>
                    </div>
                </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* end of container pages and contain  */}
    </div>
  );
}

export default App;
