import React from 'react'
import cultural from "../images/poster/cultural.png";
import Image from 'next/image';
export default function EventsCard(props) {
  return (
    <>
    <div>
        <div className='flex flex-col  rounded-xl'>
            <div>
            <Image className="p-2" src={props.image} alt={props.alias}/>
            <p className='team2 text-3xl'>{props.title}</p>
            </div>
            <div className='flex gap-6 p-4 text-center justify-center'>
            <div className='team2 text-xl border-2 px-2 rounded-3xl '>
                <a href='https://rzp.io/l/2oXh3E3Vu'>
                    Register Now
                </a>                    
                </div>
            <div className='team2 text-xl border-2 px-2 rounded-3xl border-white'>
                <a href=''>
                    Event Details
                </a>
            </div>
            </div>
        </div>
        </div>
    </>
  )
}
