import React from 'react'

import photo1 from '../images/photo1.jpg'
import photo2 from '../images/photo1.jpg'
import photo3 from '../images/photo1.jpg'

import Image from 'next/image'
import uniphoto from '../images/uni photo.png';
import { useRouter } from 'next/router';
import NavMenu from '@/components/NavMenu';


const About = () => {
    const router = useRouter();
    const showNav = router.query.showNav;
    return (
        <div>
            {showNav && <NavMenu />}
            <div className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] text-white">
                <div className="container mx-auto">
                    <div className="   md:px-12 xl:px-6">
                        <div className="relative  ">
                            <div className="lg:w-2/3 md:text-center  mx-auto">
                                <h1 className="text-white font-bold text-4xl md:text-6xl xl:text-7xl">About<span className="text-primary text-[#EACD69]"> Us.</span></h1>

                            </div>
                        </div>
                    </div>
                    <div className="-mx-4 mt-10 flex flex-wrap items-center justify-between">

                        <div className="w-full px-4 lg:w-6/12">
                            <div className="-mx-3 flex items-center sm:-mx-4">
                                {/* <div className="w-full px-3 sm:px-4 xl:w-1/2"> */}
                                <div className="relative  z-10 my-4 h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter ">
                                    <Image
                                        src={uniphoto}
                                        alt=""

                                        className=" h-[350px] rounded-2xl "
                                    />
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                            <div className="mt-10 lg:mt-0">
                                <p className="text-body-color text-justify mb-8 text-base" >
                                JECRC University has its campus in Jaipur the capital city of Rajasthan and the famous tourist and business city in north-western India. The 32-acre JU campus combines unique classical architecture and thoughtful layout and landscaping to create a perfect learning ecosystem. The campus is located around the prime industrial and institutional hub of Jaipur and is well connected with all parts of the city. JECRC University is driven by the spirit of innovation-led research. This is spelt out in infrastructure as well as practices. The multifaceted research encompasses subject-specific exploration as well as the contexts of the business environment in which our students will operate and perform. JECRC is known for a strong research culture and close industry linkages.</p>
                            </div>
                        </div>
                    </div>
                    <div className="   md:px-12 xl:px-6">
                        <div className="relative pt-36 ">
                            <div className="lg:w-2/3 md:text-center  mx-auto">
                                <h1 className="text-white font-bold text-4xl md:text-6xl xl:text-7xl">About<span className="text-primary text-[#EACD69]">Ju Rhythm.</span></h1>

                            </div>
                        </div>
                    </div>
                    <div className="-mx-4 mt-10 flex flex-wrap items-center justify-between">
                        <div className="w-full lg:w-1/2 xl:w-5/12">
                            <div className="mt-10 lg:mt-0">

                                <p className="text-body-color mb-8 text-justify text-base">
                                JU Rhythm - Beats Of Imagination, one the largest Techno- Cultural-Sports-Business Fest has developed over the years into so much more: a melting pot of Indian and Global culture, a launchpad for upcoming technofreak, a showcase of spectacle.

                                This year at JU Rhythm'23 it is all about uniting the power of ideas with the spark of intention.

                                We strongly believe every mind has the capacity to a better alternative out of every life. We bring a platform where in the youth come together to explore new paradigm in creativity; which is the bedrock of all growth.

                                 JU Rhythm each year brings a fresh vibe among everyone & enthusiasm is next level. The rising slope of participation graph makes us to expect more & the most promising one.</p>
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-6/12">
                            <div className="-mx-3 flex items-center sm:-mx-4">
                                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                    <div className="py-3 sm:py-4">
                                        <Image
                                            src={photo1}
                                            alt=""
                                            className="w-full rounded-2xl"
                                        />
                                    </div>
                                    <div className="py-3 sm:py-4">
                                        <Image
                                            src={photo2}
                                            alt=""
                                            className="w-full rounded-2xl"
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                    <div className="relative z-10 my-4">
                                        <Image
                                            src={photo3}
                                            alt=""
                                            className="w-full rounded-2xl"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About