import React, { createContext, useEffect, useState } from 'react'
import axios from "axios";

export const StoreContext =createContext(null)

const StoreContextProvider = (props) => {
  const url="http://localhost:4000";
  const [token,setToken]=useState("");
  const [past_events,setPastEvents]=useState([])
  const [upcoming_events,setUpcomingEvents]=useState([])

  const fetchPastEvents = async ()=>{
    const response=await axios.get(url+'/api/pastEvent/list')
    setPastEvents(response.data.data)
  }

  useEffect(()=>{
    async function loadPastEvents(){
      await fetchPastEvents();
      if(localStorage.getItem("token")){
        setToken(localStorage.getItem("token"));
      }
    }
    loadPastEvents();
  },[])

  const fetchUpcomingEvents = async ()=>{
    const response=await axios.get(url+'/api/upcomingEvent/list')
    setUpcomingEvents(response.data.data)
  }

  

  useEffect(()=>{
    async function loadUpcomingEvents(){
      await fetchUpcomingEvents();
      if(localStorage.getItem("token")){
        setToken(localStorage.getItem("token"));
      }
    }
    loadUpcomingEvents();
  },[])

  const contextValue = {
    past_events,
    upcoming_events,
    url,
    token,
    setToken
  }
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider
