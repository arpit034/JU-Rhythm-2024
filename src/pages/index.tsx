import React from 'react';
import Header from '@/components/Header';
import Container from '@/components/Layout';
import Gallery from './gallery';
import Pronities from './pronities';
import Events from './events';
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';
import NewNavBar from '@/components/NavBar';
import Image from 'next/image';
import technical_poster from '../images/poster/Technical.png'
import cultural_poster from '../images/poster/cultural.png'
import sports_poster from '../images/poster/sports.png'
import media_poster from '../images/poster/media.png'




export default function PreviewPage() {
  const router = useRouter();

  return (

    <>
   <NewNavBar/>
      <Container>
        <Header />

        <section className='mt-20 -pt-[50px] back '>
          <div className="shadow"></div>
          <div className="relative" id="home">

            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 ">
              <div className="relative pt-36 ml-auto">
              
                
                <div className="lg:w-2/3  text-justify-content mx-auto">

                  <h1 className="foot  text-[#FCEE09]  dark:text-white  text-6xl   md:text-6xl xl:text-8xl ">JU Rhythm<span className=" foot text-primary text-[#FCEE09]">'24</span></h1>
                  <h4 className="mt-8 text-white dark:text-gray-450 text-xl text-align:left ">
                  JECRC University has its campus in Jaipur the capital city of Rajasthan and the famous tourist and business city in north-western India. The 32-acre JU campus combines unique classical architecture and thoughtful layout and landscaping to create a perfect learning ecosystem. The campus is located around the prime industrial and institutional hub of Jaipur and is well connected with all parts of the city. JECRC University is driven by the spirit of innovation-led research. This is spelt out in infrastructure as well as practices. The multifaceted research encompasses subject-specific exploration as well as the contexts of the business environment in which our students will operate and perform. JECRC is known for a strong research culture and close industry linkages.</h4>
                  <div className='flex justify-between mt-10 text-align:left'>
                    <div className="flex  space-x-2">
                      <svg className="w-6 h-6 text-[#FCEE09]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <span className="text-[#FCEE09] text-lg">21-23 February</span>
                    </div>
                    <div className="flex  space-x-2">
                    <svg className="w-6 h-6 text-[#FCEE09]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2 C7.03 2 3 6.03 3 11 C3 16.55 12 22 12 22 C12 22 21 16.55 21 11 C21 6.03 16.97 2 12 2 Z"></path>
                    <circle cx="12" cy="11" r="4"></circle>
                    </svg>
                    <span className="text-[#FCEE09] text-lg ">JECRC UNIVERSITY</span>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
          </div>
        </section>
       
          <Pronities />
          {/*EVENTS*/ }
          <div className='flex flex-col text-center justify-center p-16'>
                    <div className="">
                        <h1 className="team2 mb-24 text-white font-bold text-8xl md:text-6xl xl:text-8xl">Events</h1>
                    </div>
                       
                    <div className=' grid  md:flex justify-evenly '>
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
                                <a href='/sports'>
                                <Image src={sports_poster} className="p-1 transition-transform duration-300 transform hover:scale-105 cursor-pointer w-72" alt='Technical Poster'/>
                                </a>
                                </div>
                                
                                <div>
                                <a href='/Media'>
                                <Image src={media_poster} className="p-1 transition-transform duration-300 transform hover:scale-105 cursor-pointer w-72" alt='Technical Poster'/>
                                </a>
                                </div>

                               
    
                            </div>
                </div> 
     
          <Gallery />
        
      </Container >
    </>

  );
}