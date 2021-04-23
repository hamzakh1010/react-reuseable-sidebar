import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/report';
import Home from './pages/home';
import About from './pages/about';
import Sidebar from './components/sidebar';
function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/home' exact><Home /></Route>
        <Route path='/reports' exact > <Reports /> </Route>
        <Route path='/reports/reports1' exact><ReportsOne /></Route>
        <Route path='/reports/reports2' exact><ReportsTwo /></Route>
        <Route path='/reports/reports3' exact><ReportsThree /></Route>
        <Route path='/about' exact > <About /></Route>
      </Switch>
    </Router>
  );
}

export default App;
