import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookingForm from './components/BookingForm.js';
import SuccesfulyBookedEvent from './components/SuccesfulyBookedEvent';
import Login from './components/login.js'
import Home from './components/Home.js'
import BookedEvents from './components/bookedEvents.js'
import AdminHome from './components/adminHome.js'
import AllBookedEvents from './components/allBookedEvents.js'
import CreateNewUser from './components/createNewUser.js'
import AdminLogin from './components/AdminLogin.js'
import NewUserSuccess from './components/newUserSuccess.js'
import AllDepartments from './components/allDepartments.js'
import UpdateEvent from './components/updateEvent';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/home/:departmentId' Component={Home} />
        <Route exact path='/bookevent/:departmentId' Component={BookingForm} />
        <Route exact path='/successfullybooked/:departmentId' Component={SuccesfulyBookedEvent} />
        <Route exact path='/' Component={Login} />
        <Route exact path='/bookedevents/:departmentId' Component={BookedEvents} />
        <Route exact path='/adminhome' Component={AdminHome} />
        <Route exact path='/createnewuser' Component={CreateNewUser} />
        <Route exact path='/allbookedevents' Component={AllBookedEvents}/>
        <Route exact path='/adminlogin' Component={AdminLogin} />
        <Route exact path='/newusersuccess' Component={NewUserSuccess} />
        <Route exact path='/alldepartments' Component={AllDepartments} />
        <Route exact path="/updateevent/:departmentId/:bookingId" Component={UpdateEvent} />
      </Routes>
    </Router>
  );
}

export default App;
