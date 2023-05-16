import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './App.css';
import Fib from "./Components/Fib"
import OtherPages from './Components/OtherPages';
import Weather from './Components/Weather'

function App() {
  return (
    <Router>
      <div className="App">

      <Routes>
        <Route exact path='/' element={<Fib/>} />
        <Route exact path='/weather' element={<Weather/>} />
        <Route exact path='/Otherpage' element={<OtherPages/>} />
      </Routes>

    </div>
  </Router>
  );
}

export default App;
