import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { images } from '../Assets/Assets';
import { StoreContext } from '../../context/storeContext';

const Navbar = ({setShowLogin}) => {

    const [menu,setMenu] = useState("home");

    const {token,setToken}=useContext(StoreContext);

    const navigate = useNavigate();

    const logout =()=>{
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    }
    
    return(
        <>
            <div className="navbar"> 
                <h2 className='text-2xl'>MU <span>Events</span></h2>
                <ul className="navbar-menu">
                    <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}><Link to="/">Home</Link></li>
                    <li onClick={()=>setMenu("past-events")}  className={menu==="past-events"?"active":""}><Link to="/pastEvents">Past Events</Link></li>
                    <li onClick={()=>setMenu("upcoming-events")}  className={menu==="upcoming-events"?"active":""}><Link to="/upcomingEvents">Upcoming Events</Link></li>
                    <li onClick={()=>setMenu("about")}  className={menu==="about"?"active":""}><Link to="/about">About</Link></li>
                </ul> 
                {!token?<div className="navbar-right">
                    <button onClick={()=>setShowLogin(true)}>Sign In</button>
                </div> 
                : <div className='navbar-profile'>
                    <img src={images.profile_icon} alt=''/>
                    <ul className='nav-profile-dropdown'>
                        <li onClick={logout}><img src={images.logout_icon} alt=''/><p>Logout</p></li>
                    </ul>
                </div>}
                
            </div>
            <img className="w-full h-80" src={images.Varsity} alt=''/>
       </>
    )
}

export default Navbar