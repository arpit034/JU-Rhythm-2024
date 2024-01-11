import React from 'react';
import Header from '@/components/Header'; 
import Gallery from './gallery';
import Pronities from './pronities';
import { useEffect,useState } from 'react';
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';
import NewNavBar from '@/components/NavBar';
import Image from 'next/image';
import { Download } from 'lucide-react';



export default function PreviewPage() {
  const images = [
    {
        image: 'https://i.postimg.cc/3NYncKdb/image3.jpg',
        className: 'small'
    },
    {
        image: 'https://i.postimg.cc/rFgY7tGG/image2.jpg',
        className: 'tall'
    },
    {
        image: 'https://i.postimg.cc/NMTznJbL/image4.jpg',
        className: 'small'
    },
    {
        image: 'https://i.postimg.cc/j2bFYHkc/image5.jpg',
        className: 'tall'
    },
    {
        image:'https://i.postimg.cc/rpyyM478/image6.jpg',
        className: 'tall'
    },
    {
        image: 'https://i.postimg.cc/PfCxCmJJ/image7.jpg',
        className: 'tall'
    },
    {
        image: 'https://i.postimg.cc/vBSJRxwS/image8.jpg',
        className: 'small'
    },
    {
        image: 'https://i.postimg.cc/wT9GWkNT/image9.jpg',
        className: 'tall'
    },
    {
        image: 'https://i.postimg.cc/BbLdJZqZ/image10.jpg',
        className: 'tall',
    },
    {
        image: 'https://i.postimg.cc/Sswg76hq/image11.jpg',
        className: 'small'
    },
    {
        image: 'https://i.postimg.cc/8P7YvCgT/image12.jpg',
        className: 'tall'
    },
    {
        image: 'https://i.postimg.cc/Qxgf1KnG/image13.jpg',
        className: 'small'
    },
    {
        image: 'https://i.postimg.cc/rFgY7tGG/image2.jpg',
        className: 'tall'
    },
    {
        image: 'https://i.postimg.cc/8cjr5MvQ/image14.jpg',
        className: 'small'
    },
    {
        image: 'https://i.postimg.cc/KvTdVYqJ/image15.jpg',
        className: 'small'
    },
    {
        image: 'https://i.postimg.cc/C1K7VvFw/image16.jpg',
        className: 'tall'
    },
    {
        image: 'https://i.postimg.cc/66mjBN2g/image17.jpg',
        className: 'tall'
    },
    {
        image: 'https://i.postimg.cc/pdW4pJ26/image18.jpg',
        className: 'small'
    },
    {
        image: 'https://i.postimg.cc/3JMn6FDD/image19.jpg',
        className: 'tall'   
    },
    {
        image: 'https://i.postimg.cc/Cx77Ryrj/image20.jpg',
        className: 'tall'   
    },
    {
        image: 'https://i.postimg.cc/zf3C3ygr/image21.jpg',
        className: 'small'   
    },
    {
        image: 'https://i.postimg.cc/GpSjjFCt/image22.jpg',
        className: 'small'   
    },
    {
        image: 'https://i.postimg.cc/gJPCGbx3/image23.jpg',
        className: 'tall'   
    },
    {
        image: 'https://i.postimg.cc/yx2XzsdH/image24.jpg',
        className: 'small'   
    },
    {
        image: 'https://i.postimg.cc/fbYP2q8y/image25.jpg',
        className: 'tall'   
    },
    {
        image: 'https://i.postimg.cc/nzzvjC9x/image26.jpg',
        className: 'small'   
    },
    {
        image: 'https://i.postimg.cc/xCwcfCKt/image27.jpg',
        className: 'tall'   
    },
    {
        image: 'https://i.postimg.cc/9XLnn7Yd/image28.jpg',
        className: 'small'   
    },
    {
        image: 'https://i.postimg.cc/PqLXCHfc/image29.jpg',
        className: 'small'   
    },

    {
        image: 'https://i.postimg.cc/tTtLTv6w/image30.jpg',
        className: 'small'   
    },
]
  const router = useRouter();
  const Gallery = () => {
    const router = useRouter();
    let showNav = router.query.showNav;
    const [isShowNav, setIsShowNav] = useState(showNav === 'true');

    useEffect(() => {
        const handlePopstate = () => {
            setIsShowNav(false);
        };

        window.addEventListener('popstate', handlePopstate);

        return () => {
            window.removeEventListener('popstate', handlePopstate);
        };
    }, []);
  }
  return (
   
    <>
   <NewNavBar/>
   <Header />
  
        <section className='mt-20 md:mt-8 '>
          <div className="shadow">

          <div className=''>
            <div className='flex justify-center gap-10 text-center'>
                <div className='team2 border-2 rounded-3xl w-36 p-2 text-2xl text-bold hover:scale-105 hover:shadow hover:shadow-white'>
                    <a href='https://i.postimg.cc/V6zqbQ95/Guidlines-Rhythm.png' target='_blank'>Guidelines</a>
                </div>

                <div className='team2 border-2 rounded-3xl w-36 p-2 text-2xl text-bold hover:scale-105 hover:shadow hover:shadow-white '>
                    <a href='/events'>Register</a>
                </div>
              </div>
              </div>
          </div>
          <div className="relative" id="home">

            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 ">
              <div className="relative pt-36 ml-auto">
              
                
                <div className="lg:w-2/3  text-justify-content mx-auto">

                  <h1 className="foot  text-[#FCEE09]  dark:text-white  text-6xl   md:text-6xl xl:text-8xl ">JU Rhythm<span className=" foot text-primary text-[#FCEE09]">'24</span></h1>
                  <h4 className="mt-8 text-white dark:text-gray-450 text-xl text-align:left ">
                  Board on an extraordinary convergence of technology, culture, sports and media, presented with pride by JECRC University in the form of JU Rhythm '24! JU RHYTHM: Beats of Imagination is one of the biggest fests of Rajasthan. This year's spectacle transcends the conventional CYBER PUNK experience; it is a commitment to delivering unparalleled excitement and innovation resonating across the nation. 
                  JU RHYTHM is not just a fest; it is a promise of excellence and a showcase of pure energy. Prepare yourself for an unforgettable experience that goes beyond the ordinary. Join us in this unparalleled festivity where promises materialise into reality, and innovation knows no bounds.</h4>
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
                                <Image src='https://i.postimg.cc/dVhb3xHN/Technical.png' className="p-1 transition-transform duration-300 transform hover:scale-105 cursor-pointer w-72" alt='Technical Poster' width={400} height={100}/>
                                </a>
                                </div>

                                <div>
                                <a href='/cultural'>
                                <Image src='https://i.postimg.cc/h4rW5xQs/Cultural.png' className="p-1 transition-transform duration-300 transform hover:scale-105 cursor-pointer w-72" alt='Technical Poster' width={400} height={100}/>
                                </a>
                                </div>
                                <div>
                                <a href='/sports'>
                                <Image src='https://i.postimg.cc/CLxTT1jg/Sports.png' className="p-1 transition-transform duration-300 transform hover:scale-105 cursor-pointer w-72" alt='Technical Poster' width={400} height={100}/>
                                </a>
                                </div>
                                
                                <div>
                                <a href='/Media'>
                                <Image src='https://i.postimg.cc/jd3VsbXJ/Media.png' className="p-1 transition-transform duration-300 transform hover:scale-105 cursor-pointer w-72" alt='Technical Poster' width={400} height={100}/>
                                </a>
                                </div>

                               
    
                            </div>
                </div> 
     
          
          {/** Gallery */}
          <section className='p-10 md:p-20'>
                <div className="   md:px-12 xl:px-6">         
                 <div className="relative pt-12 ">
                    <div className="lg:w-2/3 md:text-center  mx-auto">
                        <h1 className=" team2 text-white font-bold text-4xl md:text-6xl xl:text-7xl ">Glimpses Of JU Rhythm</h1>

                    </div>
                </div>
                </div>
                <div className="grid-wrapper  mt-10" >
                    {images.map((item) => (
                        <div className={item.className}>
                            <Image src={item.image} alt="" height={100} width={100} />
                        </div>
                    ))}

                </div>
            </section>
          <Footer/>        
      
    </>
    
  );
}