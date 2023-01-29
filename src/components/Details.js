import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars'
import { useParams } from 'react-router-dom'
import {db} from '../firebase/firebase'
import {doc, getDoc} from 'firebase/firestore'
import { ThreeCircles } from 'react-loader-spinner'
import Reviews from './Reviews'

const Details = () => {
    const {id} = useParams();
    const [data, setData] = useState({
        title: "",
        year: "",
        image:"",
        description: "",
        rating: 0,
        rated: 0
    });
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        async function getData(){ 
            setLoading(true);
            const _doc = doc(db, "movies", id)
            const _data = await getDoc(_doc);
            setData(_data.data());
            setLoading(false);

        }
        getData();
    },[id])
  return (
    <div className='p-4 mt-4 flex flex-col md:flex-row items-center md:items-start w-full justify-center'>
        {loading ? <div className='h-96 flex w-full justify-center items-center'><ThreeCircles height={25} color="white"/>
            </div>:
            <>
        <img className='h-96 block sticky top-24' alt='demo' src={data.image}/>
        <div className='md:ml-4 ml-0 w-full md:w-1/2'>
            <h1 className='text-3xl font-bold text-gray-400'>{data.title}: <span className='text-xl'> 
            ({data.year}) </span>
            </h1>
            <ReactStars
            size={20}
            value={data.rating/data.rated}
            edit={false}
            />
            <p className='mt-3'>{data.description} 
            <Reviews id={id} prevRating={data.rating} userRated={data.rated}/>
            </p>

        </div>
        <div>
        <iframe width="560" height="315" src={data?.youtube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        </>
        }

    </div>
  )
}

export default Details;