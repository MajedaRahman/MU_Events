import React, { useContext } from 'react'
import Events from '../Events/Events'
import { StoreContext } from '../../context/storeContext';
import './UpcomingEvents.css'


function UpcomingEvents() {
   
  const {upcoming_events} =useContext(StoreContext);

  return (
    <div className='upcomingEvents' id='upcomingEvents'> 
    <h1 className='text-3xl font-bold pb-2 border-b-4 border-red-600 my-8 '>Upcoming Events</h1>
    <div className='upcomingEvents-content flex flex-wrap justify-center mx-3'>
      {upcoming_events.map((upEvent,key)=>{
        return <Events key={key} 
        image={upEvent.image} 
        name={upEvent.name} 
        date={upEvent.date}
        time={upEvent.time}
        duration={upEvent.duration}
        place={upEvent.place}/>
      })}
    </div>
    </div>
  )
}

export default UpcomingEvents
