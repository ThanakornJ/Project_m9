import { Route, Switch } from 'react-router-dom';

import ScrollToTop from './components/controller/ScrollToTop';
import PrivateRoute from './components/controller/PrivateRoute';

// USER
import Home from './pages/Home';
import Target from './pages/Target';
import ExcerciseUser from './pages/ExcerciseUser.jsx'
import AddExerciseAdmin from './pages/Admin/AddExerciseAdmin';
import ShowTargetUser from './pages/ShowTargetUser';
import Login from './pages/Login';
import Register from './pages/Register';
import ChartCalories from './pages/ChartCalories';
import FoodUser from './pages/Food';
import SaveCaloriesDay from './pages/SaveCaloriesDay';


// ADMIN
import Dashboard from './pages/Admin/Dashboard';
import ExerciseAdmin from './pages/Admin/ExerciseAdmin';
import UsersAdmin from './pages/Admin/UsersAdmin';
import FoodAdmin from './pages/Admin/FoodAdmin';
import NewFood from './pages/Admin/NewFood';


function App() {
  return (
    <ScrollToTop>
      <Switch>
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="/exercise" component={ExerciseAdmin} />
        <PrivateRoute path="/users" component={UsersAdmin} />
        <PrivateRoute path="/foods" component={FoodAdmin} />
        {/* <PrivateRoute path="/exercise" component={FoodAdmin} /> */}

        <PrivateRoute path="/new-food" component={NewFood} />
        
        <Route path="/target" component={Target} />
        <Route path="/exercise-user" component={ExcerciseUser} />
        <Route path="/add-exercise" component={AddExerciseAdmin} />
        <Route path="/show-target" component={ShowTargetUser} />
        <Route path="/sign-in" component={Login} />
        <Route path="/sign-up" component={Register} />
        <Route path="/chart" component={ChartCalories} />
        <Route path="/food-user" component={FoodUser} />
        <Route path="/save-calories" component={SaveCaloriesDay}/>
        <Route path="/" component={Home} />
      </Switch>
    </ScrollToTop>
  );
}

export default App;
