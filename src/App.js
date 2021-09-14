import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import bitan from './images/myPhoto.png';
import { description, firstname, GITHUB, lastname, LINKEDIN } from './constants';
import Links from './components/Links';
const App = () =>  {
  return (
    <div className="App">
      <div className="outerBox">
        <div className="name-header">{firstname} {lastname}</div>
        <div className="links">
          <ul>
            <li>{Links(LINKEDIN)}</li>
            <li>{Links(GITHUB)}</li>
          </ul>
        </div>
      </div>
      <div className="mah-container">
        <div className="jumbo_header">
          <div className="my_image_row">
            <img src={bitan} alt={firstname} className="my_image"/>
          </div>
          <div className="details_row">
            <div className="name">{firstname} {lastname}</div>
            <div className="description">{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
