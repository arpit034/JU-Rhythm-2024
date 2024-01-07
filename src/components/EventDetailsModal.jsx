import React, { useState } from 'react'
import { X } from 'lucide-react';
import { useSelector } from 'react-redux';
import { CalendarCheck2 } from 'lucide-react';
import { Clock8 } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Phone } from 'lucide-react';

function EventDetailsModal(props) {
console.log(props.rules)

  return (
    <div className='mt-36 md:mt-0 fixed inset-0 bg-opacity-30 backdrop-blur-sm flex items-center justify-center '>
        <div className='bg-[#151515] max-w-3xl overflow-y-auto text-white border-2 px-2 mx-4'>
            <div className='flex w-full justify-between px-8 py-2'>
                <h1 className='team2 text-4xl'>{props.name}</h1>
                <button onClick={props.onClose}>
                <X className='text-2xl self-end' />
              </button>
            </div>
            <div className='w-11/12 text-left text-sm px-8 '>
            <p>{props.details}</p>
              </div>
            <hr/>
            <div>
              <div className='flex flex-col md:flex-row md:justify-evenly py-2'>
              <div className='flex gap-2'>
                <CalendarCheck2/><p className='text-lg font-bold text-yellow-100'>DATE: {props.date}</p>
                </div>
              <div className='flex gap-2'>
                <Clock8/><p className='text-lg font-bold text-yellow-100'>TIME: {props.time}</p>
                </div>
              <div className='flex gap-2'>
                <MapPin/><p className='text-lg font-bold text-yellow-100'>VENUE: {props.venue}</p>
                </div>
              </div>
              <hr/>
              <div className='text-left py-2 '>
                <h1 className='text-2xl team2'>About Event:</h1>
                  <p>{props.about}</p>
              </div>

              <div className='text-left py-2'>
              <h1 className='team2 text-2xl'>RULES:</h1>
                <p>1. {props.rules[0]}</p>
                <p>2. {props.rules[1]}</p>
                <p>3. {props.rules[2]}</p>
                <p>4. {props.rules[3]}</p>
                <p>5. {props.rules[4]}</p>
                <p>6. {props.rules[5]}</p>
                <p>7. {props.rules[6]}</p>
                <p>8. {props.rules[7]}</p>
               

              </div>
              <hr/>
              <div className='flex flex-col md:flex-row team2 py-2'>
                <h2 className='text-xl'>Event Coordinators:       </h2>
                <div className='flex text-bold gap-16'>
                  <div className='flex gap-2'><Phone color='white'/> <p className='text-lg'> {props.coordinator1}</p></div>
                  <div className='flex gap-2'><Phone color='white'/> <p className='text-lg'> {props.coordinator2}</p></div>
                </div>
              </div>

            </div>
    </div>
    </div>
  )
}

export default EventDetailsModal
