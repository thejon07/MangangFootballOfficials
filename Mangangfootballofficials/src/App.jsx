import {
  Routes, Route
} from 'react-router-dom'

import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Home from './components/Home.jsx';
import PrivateRoute from './privateroute/PrivateRoute.jsx';
import Navbar from './components/Navbar.jsx';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;