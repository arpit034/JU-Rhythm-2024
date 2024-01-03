import React from 'react'
import NewNavBar from '../components/NavBar'
const Footer = () => {
    return (
        <>
        <NewNavBar/>
        <footer aria-label="Site Footer" className="foot2 ">
            <div className='flex flex-col md:flex-row items-center justify-center gap-10 pt-8'>
            <div className=" max-w-5xl  py-16 ">
                <div className="flex justify-start text-black pb-10">
                    <h1 className='team1 text-7xl'>Contact Us </h1>
                </div>
                <div className="flex justify-start text-black mt-2 ">
                    <p className='text-xl'>  In case of any query or problem feel free to visit our office or contact the following numbers for the same</p>
                </div>
                <div className="flex justify-start text-black">
               
                <svg className="w-6 h-6 text-black mt-2 mx-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2 C7.03 2 3 6.03 3 11 C3 16.55 12 22 12 22 C12 22 21 16.55 21 11 C21 6.03 16.97 2 12 2 Z"></path>
                        <circle cx="12" cy="11" r="4"></circle>
                      </svg>
                      <p className="text-xl mt-2  text-black ">
                      Plot No. IS-2036 to IS-2039 Ramchandrapura Industrial Area
                      Jaipur, Sitapura, Vidhani, Rajasthan 303905
                </p>
                </div>
               
               
                    <div className="text-center sm:grid sm:justify-start sm:text-left grid-col-2  mt-10">

                        <p className="mt-4 text-xl  text-black-500 sm:order-first sm:mt-0">
                            <a className="text-black" href="tel:8949599497 tel:9782395108">Technical Head:+91 8949599497 +91 9782395108</a>
                        </p>
                        <p className="mt-4 text-xl  text-black-500 sm:order-first sm:mt-0">
                        <a className="text-black" href="tel:+91 7340554253 tel: +91 7229902019">Cultural Head:+91 7340554253 +91 7229902019 </a>
                        </p>
                        <p className="mt-4 text-xl  text-black-500 sm:order-first sm:mt-0">
                        <a className="text-black" href="tel:+91 7494996128 +91 8299531449">Sports Head: +91 7494996128 +91 8299531449</a>
                        </p>  
                        <p className="mt-4 text-xl  text-black-500 sm:order-first sm:mt-0">
                        <a className="text-black" href="tel:+91 9079790744">Media Head: +91 9079790744 </a>
                        </p>
                        <p className="mt-4 text-xl  text-black-500 sm:order-first sm:mt-0">
                        <a className="text-black" href="tel:+91 7296804330 ">Sponsorship Head:+91 7296804330 +91 8949599497</a>
                        </p>
                        <p className="mt-4 text-xl  text-black-500 sm:order-first sm:mt-0">
                        <a className="text-black" href="tel: +91 8630832729">Promotion Head: +91 8630832729 +91 9950265903 </a>
                        </p>
                        <p className="mt-4 text-xl  text-black-500 sm:order-first sm:mt-0">
                        <a className="text-black" href="mailto:sdo@jecrcu.edu.in">sdo@jecrcu.edu.in</a>
                        </p>
                     
                    </div>
                    <div>
                  
                    </div>
                            
                           </div>
                           
                           <div className='border-black border-2 rounded-sm'>
                           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.023087626716!2d75.87491107521937!3d26.775533976729168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc892b8f05399%3A0x43fbca7105eca800!2sJECRC%20University!5e0!3m2!1sen!2sin!4v1704211855400!5m2!1sen!2sin" width="480" height="400"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                           </div>
                        </div>
                           <div className="flex justify-center text-black mt-4 text-2xl pt-6">
                            <p className="text-100px  text-white sm:order-first sm:mt-0">
                             &copy; Copyright JU-RHYTHM 2024. All Rights Reserved
                            </p>
                           </div>
                            <div className="flex justify-center text-black mt-8 text-2xl py-1">
                            <p className="text-100px text-white sm:order-first sm:mt-0">
                              Devloped and designed by Arpit Sharma || Devansh Verma 
                            </p>
                           </div>
                           
        
        </footer >
        
        </>)

}


export default Footer