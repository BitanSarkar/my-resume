import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Resume from './Resume';
const App = () =>  {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <Resume/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
