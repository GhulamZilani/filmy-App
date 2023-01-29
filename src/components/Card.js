import { getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { ThreeDots } from 'react-loader-spinner';
import ReactStars from "react-stars";
import { moviesRef } from '../firebase/firebase';
import { Link } from 'react-router-dom';

const Card=()=> {
  const [data,setData]=useState([]);
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
    async function getData(){
      setLoading(true);
      const _data =await getDocs(moviesRef)
      _data.forEach((doc)=>{
        setData((pre)=>[...pre, {...(doc.data()),id:doc.id}])
      })
      
      setLoading(false);
      
    }
    getData()
    
  },[])
  
  // console.log(data[0].reference.id);
  // console.log(data);

  return (
    <div className='flex flex-wrap justify-between p-3 mt-2'>
      {loading ? <div className='w-full flex justify-center items-center h-96'><ThreeDots height={40} color="white" /></div> :
      data.map((e,i)=>{
        return(
          <Link to={`/details/${e.id}`} >
            <div key={i} className='card font-medium shadow-lg p-2 hover:-translate-y-4 cursor-pointer mt-6 transition-all duration-500'>
              <img alt='demo' className='h-60 md:h-72' src={e.image}/>
              <h1>
                <span className='text-green-500'>Name:</span>
              {e.title}
              </h1>
              <h1 className='flex items-center'>
              
                <span className='text-green-500 mr-1'>Rating:</span>
                {e.rating}
                </h1>
              <ReactStars
              size={20}
              half={true}
             value={e.rating/e.rated}
             edit={false}/>
             <h1><span className='text-green-500'>
              Year:
             </span>{e.year}</h1>
             </div>
            
          </Link>
        )})
      }
    
     
    </div>
  )
}
export default Card;
