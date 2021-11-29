import './App.css';
import Navigation from './components/Navigation/Navigation';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import About from './components/Navigation/About/About';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route index element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
