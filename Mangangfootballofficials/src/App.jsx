import {
  Routes, Route
} from 'react-router-dom';

import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Home from './components/Home.jsx';
// import PrivateRoute from './Private/privateroute.js';
import PrivateRoute from './Private/privateroute.jsx';
import Navbar from './components/Navbar.jsx';
import About from './components/About/About.jsx';
import Dashboard from './components/Dasboard.jsx'; // Spelling corrected
import Popup from './components/Popup.jsx';
import Blog from './components/Blog.jsx';
import Postblog from "./components/Postblog.jsx";
import Footer from './components/Footer.jsx';
import Readblog from './components/Readblog.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/popup" element={<Popup />} />

       <Route path='/' element={<PrivateRoute/>}>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='createpost' element={<Postblog/>}/>
          <Route path='blog' element={<Blog/>}/>
          <Route path='readblog/:id' element={<Readblog/>}/>
       </Route>
        
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
