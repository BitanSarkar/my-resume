import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import bitan from './images/myPhoto.png';
import { description, firstname, lastname } from './constants';
const App = () =>  {
  return (
    <div className="App">
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
  );
}

export default App;
