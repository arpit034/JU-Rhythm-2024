import React, { useState } from 'react'
import EventDEtailsModal from '../components/EventDetailsModal'
import cultural from "../images/poster/cultural.png";
import Image from 'next/image';
import EventDetailsModal from '../components/EventDetailsModal';
import { useSelector } from 'react-redux';
export default function EventsCard(props) {

    const [showModal,setShowModal]=useState(false)
    const names=props.title
  return (
    <>
    <div>
        <div className='flex flex-col  rounded-xl'>
            <div>
            <Image className="p-2" src={props.image} alt={props.alias}/>
            <p className='team2 text-3xl'>{props.title}</p>
            </div>
            <div className='flex gap-6 p-4 text-center justify-center'>
            <button className='team2 text-xl border-2 px-2 rounded-3xl '>
                <a href='https://rzp.io/l/2oXh3E3Vu'>
                    Register Now
                </a>                        
                </button>
            <button onClick={()=>{setShowModal(true)}} className='team2 text-xl border-2 px-2 rounded-3xl border-white'>
                    Event Details
            </button>
            {/*showModal && <EventDetailsModal 
                name={names} 
  />*/}
            </div>
        </div>
        </div>
    </>
  )
}
