import React from 'react'
import cultural from "../images/poster/cultural.png";

export default function EventsCard(props) {
  return (
    <>
    <div>
        <div className='flex flex-col border-2 rounded-xl'>
            <div>
            <img className="p-2" src={props.image}/>
            <p className='team2 text-3xl'>{props.title}</p>
            </div>
            <div className='flex gap-6 p-4 text-center justify-center'>
            <div className='team2 text-xl border-2 px-2 rounded-3xl border-white '>
                <a href=''>
                    Register
                </a>                    
                </div>
            <div className='team2 text-xl border-2 px-2 rounded-3xl border-white'>
                <a href=''>
                    Details
                </a>
            </div>
            </div>
        </div>
        </div>
    </>
  )
}
