import React, { useEffect, useState } from 'react'
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';
import image6 from '../images/image6.jpg';
import image7 from '../images/image7.jpg';
import image8 from '../images/image8.jpg';
import image9 from '../images/image9.jpg';
import image10 from '../images/image10.jpg';
import image11 from '../images/image11.jpg';
import image12 from '../images/image12.jpg';
import image13 from '../images/image13.jpg';
import image14 from '../images/image14.jpg';
import image15 from '../images/image15.jpg';
import image16 from '../images/image16.jpg';
import image17 from '../images/image17.jpg';
import image18 from '../images/image18.jpg';
import image19 from '../images/image19.jpg';
import image20 from '../images/image20.jpg';
import image21 from '../images/image21.jpg';
import image22 from '../images/image22.jpg';
import image23 from '../images/image23.jpg';
import image24 from '../images/image24.jpg';
import image25 from '../images/image25.jpg';
import image26 from '../images/image26.jpg';
import image27 from '../images/image27.jpg';
import image28 from '../images/image28.jpg';
import image29 from '../images/image29.jpg';
import image30 from '../images/image30.jpg';


import Image from 'next/image'
import { useRouter } from 'next/router'
import NavMenu from '@/components/NavMenu'
const images = [
    {
        image: image3,
        className: 'small'
    },
    {
        image: image2,
        className: 'tall'
    },
    {
        image: image4,
        className: 'small'
    },
    {
        image: image5,
        className: 'tall'
    },
    {
        image: image6,
        className: 'tall'
    },
    {
        image: image7,
        className: 'tall'
    },
    {
        image: image8,
        className: 'small'
    },
    {
        image: image9,
        className: 'tall'
    },
    {
        image: image10,
        className: 'tall',
    },
    {
        image: image11,
        className: 'small'
    },
    {
        image: image12,
        className: 'tall'
    },
    {
        image: image13,
        className: 'big'
    },
    {
        image: image2,
        className: 'tall'
    },
    {
        image: image14,
        className: 'small'
    },
    {
        image: image15,
        className: 'small'
    },
    {
        image: image16,
        className: 'big'
    },
    {
        image: image17,
        className: 'tall'
    },
    {
        image: image18,
        className: 'big'
    },
    {
        image: image19,
        className: 'tall'   
    },
    {
        image: image20,
        className: 'tall'   
    },
    {
        image: image21,
        className: 'small'   
    },
    {
        image: image22,
        className: 'wide'   
    },
    {
        image: image23,
        className: 'tall'   
    },
    {
        image: image24,
        className: 'tall'   
    },
    {
        image: image25,
        className: 'wide'   
    },
    {
        image: image26,
        className: 'small'   
    },
    {
        image: image27,
        className: 'big'   
    },
    {
        image: image28,
        className: 'small'   
    },
    {
        image: image29,
        className: 'small'   
    },

    {
        image: image30,
        className: 'small'   
    },
]

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
    return (
        <>
            {isShowNav && <NavMenu />}
            <section className='p-10 md:p-20'>
                <div className="   md:px-12 xl:px-6">          <div className="relative pt-36 ">
                    <div className="lg:w-2/3 md:text-center  mx-auto">
                        <h1 className=" team2 text-white font-bold text-4xl md:text-6xl xl:text-7xl ">Glimpses Of JU Rhythm</h1>

                    </div>
                </div>
                </div>
                <div className="grid-wrapper  mt-10" >
                    {images.map((item) => (
                        <div className={item.className}>
                            <Image src={item.image} alt="" />
                        </div>
                    ))}

                </div>
            </section>
        </>
    )
}

export default Gallery