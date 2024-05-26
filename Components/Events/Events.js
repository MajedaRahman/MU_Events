import React, { useContext } from "react";
import { StoreContext } from "../../context/storeContext";
import "./Events.css";



const Events =({image,name,date,time,duration,place})=>{

    const {url} = useContext(StoreContext);

    return(
        <div className="events w-80 p-2 m-2 rounded-lg border-4 border-solid border-blue-900">
            
                <div className=" rounded-t-xl h-56"> 
                    <img className="h-48 w-full" src={url+"/images/"+image} alt=""/>
                </div>
                <div className="flex flex-col justify-center  gap-2 pb-2 px-4">
                    <h1 className="text-xl font-bold my-1 ">{name}</h1>
                    <p><span>Date: </span> {date}</p>
                    <p><span>Time: </span> {time}</p>
                    <p><span>Duration: </span> {duration}</p>
                    <p><span>Place: </span> {place}</p>
                    <button className="rounded-xl border-solid bg-red-600 py-1 px-6 my-2 text-white font-bold">Interested</button>
                </div>
             
        </div>
    );
};

export default Events;