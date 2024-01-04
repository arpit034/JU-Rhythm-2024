import React from 'react'
import { X } from 'lucide-react';

function EventDetailsModal(props) {
  return (
    <div className='fixed inset-0 bg-opacity-30 backdrop-blur-sm flex items-center justify-center '>
        <div className='bg-white'>
        <X className='place-self-end'/>
            <h1>{props.name}</h1>
  
        </div>
    </div>
  )
}

export default EventDetailsModal
