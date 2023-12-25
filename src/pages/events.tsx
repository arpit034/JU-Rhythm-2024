import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { events } from '../eventDetails';
import NavMenu from '@/components/NavMenu';

const Events = ({ headerShown }: { headerShown: any }) => {
    // const [showAllEvents, setShowAllEvents] = React.useState(false)
    const router = useRouter();
    const showAllEvents = router.query.allEvents === "true";
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

    // Determine the value of showNav

    // Determine whether to show the NavMenu component
    const shouldShowNavMenu = headerShown && isShowNav;


    const eventToShow = showAllEvents ? events : events.slice(0, 4);
    return (
        <>
            {isShowNav && <NavMenu />}
            <div className='bg-[#151515] pb-10'>
                <div className="   md:px-12 xl:px-6 ">          <div className="relative pt-36 ">
                    <div className="lg:w-2/3 text-center  mx-auto">
                        <h1 className="team2 text-white font-bold text-8xl md:text-6xl xl:text-8xl">Events</h1>
                    </div>
                </div>
                    <div className="mx-auto  p py-2 lg:px-10 lg:pt-12 ">
                        <div className="flex justify-center p-10 lg:max-w-[1500px]">
                            <div className="grid  grid-cols-5 md:grid-cols-2 lg:grid-cols-5 gap-20 ">
                                {eventToShow.map((event) => (
                                    <Link href={{ pathname: `/event/${event.alias}` }}>

                                        <div className=' p-3 rounded-3xl m-6'>
                                            {/* <div>
                                                <Image className="h-auto max-w-full   " src={event.image} alt="" />
                                            </div> */}
                                            <div className=' p-1   transition-transform duration-300 transform hover:scale-105 cursor-pointer'>
                                            <Image className="h-auto max-w-full " src={event.image}  alt="" />
                                              </div>
                                            {/* <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 pt-3 text-center  ">{event.name}</h5> */}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </>

    )
}

export default Events

