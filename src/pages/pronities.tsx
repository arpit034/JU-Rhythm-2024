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
                        <h1 className="team2 text-white font-bold text-4xl md:text-6xl xl:text-7xl">Pro Nite</h1>

                    </div>
                </div>
            </div>
            <div className="flex justify-center p-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-5">
                    <div className=' p-3   transition-transform duration-300 transform hover:scale-105 cursor-pointer'>
                        <Image className="h-auto max-w-full " src="https://i.postimg.cc/NFd7CRh5/revealing-soon.png" alt="" />
                    </div>
                    <div className=' p-3   transition-transform duration-300 transform hover:scale-105 cursor-pointer'>
                        <Image className="h-auto  max-w-full " src="https://i.postimg.cc/NFd7CRh5/revealing-soon.png" alt="" />
                    </div>
                    <div className=' p-3   transition-transform duration-300 transform hover:scale-105 cursor-pointer'>
                        <Image className="h-auto  max-w-full " src="https://i.postimg.cc/NFd7CRh5/revealing-soon.png" alt="" />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Pronities