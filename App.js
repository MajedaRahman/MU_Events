import './App.css';
import Navbar from './Components/Navbar/Navbar'
import LoginSignup from './Components/LoginSignup/LoginSignup'
import Footer from './Components/Footer/Footer'
import UpcomingEvents from './Components/UpcomingEvents/UpcomingEvents';
import { useState } from 'react';
import PastEvents from './Components/PastEvents/PastEvents';
import { images } from './Components/Assets/Assets';

function App() {

  const [showLogin,setShowLogin]=useState(false);

    return (
      <>
      {showLogin?<LoginSignup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
        <UpcomingEvents/>
        <PastEvents/>
        <Footer/>
      
     </div>
  </>
);
}

export default App;
