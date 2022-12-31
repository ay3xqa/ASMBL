import './App.css';
import './fonts/SpaceGrotesk-Bold.ttf';
import { BrowserRouter as Router} from "react-router-dom";
import Hero from './pages/Hero';
import Works from './pages/Works';
import Community from './pages/Community';
import Team from './pages/Team';
import Footer from './pages/Footer';

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
        <Team/>
        <Footer/>
        {/* <Contact/> */}
      </Router>
    </div>
  );
}

export default App;
