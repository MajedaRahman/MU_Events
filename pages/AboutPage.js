import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

const AboutPage = () => {
  return (
    <div>
      <Navbar/>
      <div className='m-10 pt-8 px-4 text-justify'>
        <p>
          The <span className='font-bold'>“MU Events”</span> is an innovative project designed to contain information about all the events that takes place in a educational institutions. It contains the information about Upcoming events and also contains information about the past events that took place.
          If you click interested button,it also sends remainder on the day the event took place.
        <br/>
        <span className='font-bold'>List of Objectives:</span>
        <br/>
          1.Informs you about all the events that takes place in your educational institute. 
        <br/>
          2.Monitoring: Admin can update all the events that are upcoming.
        <br/>
          3.It contains information about all the past events that took place and also contain snippets of those events.
        <br/>
          4.Relate to University: Students can easily know about all the events that are going on and can select the event they want to take part in..
        <br/>
        <span className='font-bold'>Tools used:</span> 
        <br/>
        HTML: For structuring the web pages. 
        <br/>
        Tailwind CSS: For Styling the web pages.
        <br/>
        React JS: For client-side scripting.
        <br/>
        Mongo DB: For Database Management.
        </p>
      </div>
      <Footer/>
    </div>
  )
}

export default AboutPage
