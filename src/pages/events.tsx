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
           
                <div className='bg-[#151515] flex flex-col text-center justify-center '>
                    <div className="mt-16">
                        <h1 className="team2  text-white font-bold text-8xl md:text-6xl xl:text-8xl">Events</h1>
                </div>
                       
                        <div className=' grid gap-16 my-20 md:mx-20 md:w-72 md:flex '>
                          
                                {/*Seperate cards for each Event Domain */} 
                                
                                    <Image className="p-1 transition-transform duration-300 transform hover:scale-105 cursor-pointer" src={technical_poster} alt='Technical Poster'/>
                                                                     

                                <Image className="p-1 transition-transform duration-300 transform hover:scale-105 cursor-pointer" src={cultural_poster} alt='Technical Poster'/>

                                <Image className="p-1 transition-transform duration-300 transform hover:scale-105 cursor-pointer" src={sports_poster} alt='Technical Poster'/>

                                <Image className="p-1 transition-transform duration-300 transform hover:scale-105 cursor-pointer" src={media_poster} alt='Technical Poster'/>
                               
                            </div>
                </div> 
                </> 
    )
}

export default Events

