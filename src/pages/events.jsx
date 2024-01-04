import React from 'react'
import Image from 'next/image';
import { useRouter} from 'next/router'
import technical_poster from '../images/poster/Technical.png'
import cultural_poster from '../images/poster/cultural.png'
import sports_poster from '../images/poster/sports.png'
import media_poster from '../images/poster/media.png'
import Link from 'next/link';
import Technical from './technical';
import NewNavBar from '@/components/NavBar';


const Events =()=>{
    return (
        <>
        <NewNavBar/>
        <div className='flex flex-col text-center justify-center'>
                    <div className="">
                        <h1 className="team2 mb-24 mt-24 text-white font-bold text-8xl md:text-6xl xl:text-8xl">Events</h1>
                    </div>
                       
                    <div className=' grid  md:flex justify-evenly pb-48'>
                                {/*Seperate cards for each Event Domain */} 
                                   
                               <div>
                                <a href='/technical'>
                                <Image src={technical_poster} className="p-1 transition-transform duration-300 transform hover:scale-105 cursor-pointer w-72" alt='Technical Poster'/>
                                </a>
                                </div>

                                <div>
                                <a href='/cultural'>
                                <Image src={cultural_poster} className="p-1 transition-transform duration-300 transform hover:scale-105 cursor-pointer w-72" alt='Technical Poster'/>
                                </a>
                                </div>

                                <div>
                                <a href='/Media'>
                                <Image src={media_poster} className="p-1 transition-transform duration-300 transform hover:scale-105 cursor-pointer w-72" alt='Technical Poster'/>
                                </a>
                                </div>

                                <div>
                                <a href='/sports'>
                                <Image src={sports_poster} className="p-1 transition-transform duration-300 transform hover:scale-105 cursor-pointer w-72" alt='Technical Poster'/>
                                </a>
                                </div>
                                
    
                            </div>
                </div> 
     
                </> 
    )
}

export default Events

