import React ,{useContext, useState} from 'react'
import { StoreContext } from '../../context/storeContext';
import "./Blog.css"

const Blog = ({image,name,description}) => {

  const [showMore, setShowMore] = useState(false);
  const {url} = useContext(StoreContext);

  return (
    <div className="events w-80 p-2 m-2 rounded-lg border-4 border-solid border-blue-900">
      <img className="h-48 w-full mb-3 rounded-xl" src={url+"/images/"+image} alt=""/>
      <h1 className="text-xl font-bold my-3 ">{name}</h1>
      <p>
        {showMore ? description : `${description.substring(0,250)}`}
      </p>
      <button className="rounded-xl border-solid bg-red-600 py-2 px-4 my-2 text-white font-bold" onClick={() => setShowMore(!showMore)}>Show more</button>        
    </div>
  )
}

export default Blog
