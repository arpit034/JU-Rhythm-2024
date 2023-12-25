import React from 'react'
import pronite1 from '../images/soon.png';
import pronite2 from '../images/soon.png';
import pronite3 from '../images/soon.png';
import Image from 'next/image';

const images = [
    {
        image: pronite1
    },
    {
        image: pronite2
    },
    {

        image: pronite3
    }
]
const Pronities = () => {
    return (
        <section >
            <div className="   md:px-12 xl:px-6">
                <div className="relative pt-36 ">
                    <div className="lg:w-2/3 text-center  mx-auto">
                        <h1 className="team2 text-white font-bold text-4xl md:text-6xl xl:text-7xl">Celebrity<span className=" team text-primary text-white"> </span>Night</h1>

                    </div>
                </div>
            </div>
            <div className="flex justify-center p-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-5">
                    <div className=' p-3   transition-transform duration-300 transform hover:scale-105 cursor-pointer'>
                        <Image className="h-auto max-w-full " src={pronite1} alt="" />
                    </div>
                    <div className=' p-3   transition-transform duration-300 transform hover:scale-105 cursor-pointer'>
                        <Image className="h-auto  max-w-full " src={pronite2} alt="" />
                    </div>
                    <div className=' p-4   transition-transform duration-300 transform hover:scale-105 cursor-pointer'>
                        <Image className="h-auto w max-w-full " src={pronite3} alt="" />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Pronities