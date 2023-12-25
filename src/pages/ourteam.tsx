import React from 'react'
import { Arpit,isha,ashmit,Awez,dhruv,Nandini,Prayash,rakshita,Sajal,Sohan,Saksham,Navin,harsh,sajal2,daksh,sakshi,raj,aditya,anshika,Chaitanya} from '../images/team'
import Image from 'next/image'
import { twitter, linkedin, github } from '../images/icons';
import NavMenu from '@/components/NavMenu';
import { useRouter } from 'next/router';


const teamDetails = [
    {
        name: '',
        image: rakshita,
        year: "",
       

    },
    {
        name: '',
        image: Nandini,
         year: "",
       

    },
    {
        name: '',
        image: Arpit,
         year: "",
       
    },
    {
        name: '',
        image: ashmit,
         year: "",

      

    },
    {
        name: '',
        image: daksh,
       year: "",

       
    },
    {
        name: '',
        image: dhruv,
         year: "",
       

    },

    {
        name: '',
        image: Prayash,
       year: "",

       

    },
    {
        name: '',
        image: Awez,
       year: "",

      

    },
    {
        name: '',
        image: Saksham,
       year: "",

      

    },
    {
        name: '',
        image: Sohan,
       year: "",

        
    },
    {
        name: '',
        image: raj,
       year: "",

    
    },
    {
        name: '',
        image: harsh,
       year: "",

      

    },
    {
        name: '',
        image: aditya,
       year: "",


    },
   
    {
        name: '',
        image: anshika,
       year: "",

        // linkedin: 'https://www.linkedin.com/in/',
        // github: 'https://github.com/',
        // twitter: 'https://twitter.com/',
        // instagram: 'https://www.instagram.com/',

    },
    {
        name: '',
        image: isha,
       year: "",

        // linkedin: 'https://www.linkedin.com/in/',
        // github: 'https://github.com/',
        // twitter: 'https://twitter.com/',
        // instagram: 'https://www.instagram.com/',

    },
    {
        name: '',
        image: Sajal,
       year: "",

        // linkedin: 'https://www.linkedin.com/in/',
        // github: 'https://github.com/',
        // twitter: 'https://twitter.com/',
        // instagram: 'https://www.instagram.com/',

    },

    {
        name: '',
        image: sajal2,
       year: "",

        // linkedin: 'https://www.linkedin.com/in/',
        // github: 'https://github.com/',
        // twitter: 'https://twitter.com/',
        // instagram: 'https://www.instagram.com/',

    },
    {
        name: '',
        image:Navin,
       year: "",

        // linkedin: 'https://www.linkedin.com/in/',
        // github: 'https://github.com/',
        // twitter: 'https://twitter.com/',
        // instagram: 'https://www.instagram.com/',

    },
    {
        name: '',
        image: sakshi,
       year: "",

        // linkedin: 'https://www.linkedin.com/in/',
        // github: 'https://github.com/',
        // twitter: 'https://twitter.com/',
        // instagram: 'https://www.instagram.com/',

    },
    {
        name: '',
        image:Chaitanya ,
       year: "",

       
    },
  
    
  

]
const Ourteam = () => {
    const router = useRouter();
    const showNav = router.query.showNav;
    return (
        <>
            {showNav && (
                <NavMenu />
            )}
            <div className="flex justify-center">
                <div className="   md:px-12 xl:px-6">          <div className="relative pt-36 ">
                    <div className="lg:w-2/3 text-center  mx-auto">
                        <h1 className="team2 text-[#FCEE09] font-bold text-12xl md:text-6xl xl:text-8xl">Our Team</h1>

                    </div>
                </div>
                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-1 m-10  md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 pt-10">
                        {teamDetails.map((item) => (
                            <div className="w-[300px] px-6 py-6  text-center bg--200 rounded-lg lg:mt-0 xl:px-10">
                                <div className="space-y-4 xl:space-y-6 ">
                                    <Image className="mx-auto  h-50 w-50 transition-transform duration-300 transform hover:scale-105 cursor-pointer" src={item.image} alt="author avatar" />
                                    <div className="space-y-2">
                                        <div className="flex justify-center items-center flex-col space-y-3 text-lg font-medium ">
                                            <h1 className="text-white font-extrabold">{item.name}</h1>
                                             <p className='text-white font-bold'>{item.year}</p> 
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>


    )
}

export default Ourteam