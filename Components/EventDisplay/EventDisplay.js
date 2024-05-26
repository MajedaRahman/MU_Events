import React from 'react'
import './EventDisplay.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/storeContext'

const EventDisplay = () => {

    const {event_list}=useContext(StoreContext)

  return (
    <div className='event-display' id='event-display'>
      <h2>Events near you</h2>
    </div>
  )
}

export default EventDisplay
