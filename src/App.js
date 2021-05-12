
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Wrecked from './components/Wrecked'
import Car from  './components/Car'

function App() {
  return (
    <div className="App text-primary">
      <Wrecked>
        <Car carName="JS Destroyer" color="limegreen"/>
        <Car carName="JSx-Ray"  color="aqua"/>
        <Car carName="fully wrecked"  color="white"/>
      </Wrecked>
      
      
    </div>
  );
}

export default App;
