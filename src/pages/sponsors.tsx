import React from 'react'
import Image from 'next/image'
import NavMenu from '@/components/NavMenu'
import { useRouter } from 'next/router'
import NewNavBar from '@/components/NavBar'
const eventSponsors = [
    {
        image: 'https://i.postimg.cc/pLmtbzVb/upGrad.png'
    },
    {
        image: 'https://i.postimg.cc/YC0trT3P/atSign.png'
    },
    {
        image: 'https://i.postimg.cc/cHyWcCSq/Clarks-Amer.png'
    },
    {
        image: 'https://i.postimg.cc/26hkpvw8/DECATHLON.png'
    },

    {
        image: 'https://i.postimg.cc/prBPrH4w/Github.png'
    },
    {
        image: 'https://i.postimg.cc/prBPrH4w/Github.png'    
    },
    {
        image: 'https://i.postimg.cc/prBPrH4w/Github.png'    
    },
    {
        image: 'https://i.postimg.cc/prBPrH4w/Github.png'    
    },
    {
        image: 'https://i.postimg.cc/prBPrH4w/Github.png'    
    },
    {
        image: 'https://i.postimg.cc/prBPrH4w/Github.png'
    },
    {
        image: 'https://i.postimg.cc/prBPrH4w/Github.png'
    },
    {
        image: 'https://i.postimg.cc/prBPrH4w/Github.png'
    },
    {
        image: 'https://i.postimg.cc/prBPrH4w/Github.png'
    },
    {
        image: 'https://i.postimg.cc/prBPrH4w/Github.png'
    },
    {
        image: 'https://i.postimg.cc/prBPrH4w/Github.png'
    },
    {
        image: 'https://i.postimg.cc/prBPrH4w/Github.png'
    },
  

   

]
const sponsors = () => {
    const router = useRouter();
    const showNav = router.query.showNav;
    return (
        <>
           <NewNavBar/>
            <div className='bg-[#151515] pb-10'>
                <div className="md:px-12 xl:px-6 "> <div className="relative pt-36 ">
                    <div className="lg:w-2/3 text-center  mx-auto">
                        <h1 className=" foot text-white font-bold  text-12xl md:text-8xl xl:text-7xl">Collaborators</h1> 
                    </div>
                </div>
                </div>
                <div className="mx-auto  px-2 py-2 lg:px-10 lg:pt-12 ">
                    <div className="container justify-center lg:max-w-[1300px]">
                        <div className="grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
                            {eventSponsors.map((sponsor) => (
                                <div className=' p-3 justify-center flex rounded-3xl m-4'>
                                    <div>
                                        <Image className="h-auto max-w-full  rounded-xl" width={300} height={300} src={sponsor.image} alt="" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default sponsors