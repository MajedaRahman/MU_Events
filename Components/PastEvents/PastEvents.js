import React, { useContext } from 'react'
import Blog from '../Blog/Blog'
import { StoreContext } from '../../context/storeContext';
import './PastEvents.css'



const PastEvents = () => {
 
    const {past_events} =useContext(StoreContext);

  return (
    <div className='pastEvents' id='pastEvents'> 
    <h1 className='text-3xl font-bold pb-2 border-b-4 border-red-600 my-8 '>Past Events</h1>
    <div className='pastEvents-content flex flex-wrap justify-center mx-3'>
      {past_events.map((pEvent,key)=>{
        return <Blog key={key} 
        image={pEvent.image} 
        name={pEvent.name}
        description={pEvent.description}/>
      })}
    </div>
    </div>
  )
}

export default PastEvents
