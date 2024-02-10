import React from 'react'

import Image from 'next/image';

const images = [
    {
        image: 'https://i.postimg.cc/NFd7CRh5/revealing-soon.png'
    },
    {
        image: 'https://i.postimg.cc/NFd7CRh5/revealing-soon.png'
    },
    {

        image: 'https://i.postimg.cc/NFd7CRh5/revealing-soon.png'
    }
]
const Pronities = () => {
    return (
        <section >
            <div className="   md:px-12 xl:px-6">
                <div className="relative pt-36 ">
                    <div className="lg:w-2/3 text-center  mx-auto">
                        <h1 className="team2 text-white font-bold text-4xl md:text-6xl xl:text-7xl">Stars At Rhythm'24</h1>
                    </div>
                </div>
            </div>
            <div className="flex justify-center p-10">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-10 p-5">
                    <div className=' p-3  transition-transform duration-300 transform hover:scale-105 cursor-pointer'>
                        <Image className="h-auto max-w-full " src="https://i.postimg.cc/pTpjFYZ8/djholyc.png" height={100} width={100} alt="" />
                        <h4 className=" p-1 text-center team2 text-white font-bold text-4xl md:text-4xl xl:text-4xl">21 FEBRUARY</h4>
                    </div>
                    <div className=' p-3  transition-transform duration-300 transform hover:scale-105 cursor-pointer'>
                        <Image className="h-auto  max-w-full " src="https://i.postimg.cc/Vvtb7f2k/indeep.png" height={100} width={100} alt="" />
                        <h4 className="p-1 text-center team2 text-white font-bold text-4xl md:text-4xl xl:text-4xl">22 FEBRUARY</h4>
                    </div>
                    <div className=' pt-1  transition-transform duration-300 transform hover:scale-105 cursor-pointer'>
                     <Image className="h-auto  max-w-full " src="https://i.postimg.cc/ZK3rHHhx/king.png" height={300} width={300} alt="" />
                    <h4 className="p-1 text-center team2 text-white font-bold text-4xl md:text-4xl xl:text-4xl">23 FEBRUARY</h4>
                    </div>
                    <div className=' p-3 transition-transform duration-300 transform hover:scale-105 cursor-pointer'>
                        <Image className="h-auto  max-w-full " src="https://i.postimg.cc/jjqPsrnM/trapperx.png" height={100} width={100} alt="" />
                        <h4 className=" text-center p-1 team2 text-white font-bold text-4xl md:text-4xl xl:text-4xl">22 FEBRUARY</h4>
                    </div>
                    <div className=' p-3 transition-transform duration-300 transform hover:scale-105 cursor-pointer'>
                        <Image className="h-auto  max-w-full " src="https://i.postimg.cc/HLTjQ4pn/socialmedia.png" height={100} width={100} alt="" />
                        <h4 className=" text-center p-1 team2 text-white font-bold text-4xl md:text-4xl xl:text-4xl">22 FEBRUARY</h4>
                    </div>
                </div>
            </div>
        </section>
 
    )
}

export default Pronities