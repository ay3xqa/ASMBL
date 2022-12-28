import './App.css';
import './fonts/SpaceGrotesk-Bold.ttf';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Hero from './pages/Hero';
import Works from './pages/Works';
import Community from './pages/Community';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Link to="/createNew">Create New</Link> */}
        {/* <Routes>
          <Route path="/" exact element={<Hero/>} />
        </Routes> */}
        <Hero/>
        <Works/>
        <Community/>
      </Router>
    </div>
  );
}

export default App;
