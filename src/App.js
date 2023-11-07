// import image from './Image/Group 2.png'
import Carousel from './components/Carousel';
import logo from './Image/Cat-N-Dog-Logo copy.png'
import img1 from './Image/Screenshot 2023-11-07 130729.png'
import img2 from './Image/google-play-badge.png'
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <section className='newhome'>
        <div className="section1">
          <img src={logo} alt="logo" />
          <div className="box1">
            <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div className="box2">
              <img src={img1} alt="appStore" />
              <img src={img2} alt="appStore" />
            </div>
          </div>
        </div>
        <div className="section2">
          <div className="navbar">
            <Navbar />
          </div>
          <div className='type-content'>
            <h4>Type Text</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className="icons">
            <a href="https://zangoh.com/"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="https://zangoh.com/"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="https://zangoh.com/"><i className="fa-brands fa-twitter"></i></a>
          </div>
          </div>
          <Carousel />
        </div>
      </section>

      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
