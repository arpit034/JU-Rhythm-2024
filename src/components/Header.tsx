import Image from 'next/image';
import logo from '../images/logo.png'
import rhy from '../images/rhylogo.png'
import logoText from '../images/logo_text.png';

const Header = () => {
    return (
        <>
            <header>
                <div className="relative inset-x-0 overflow-hidden">
                    <video autoPlay muted loop
                        className='absolute inset-0 w-full h-full object-cover'
                        style={{ position: 'fixed', width: '100%', height: '142vh', objectFit: 'cover', zIndex: -3, opacity: .9 }}>
                        <source src="video2.mp4" type="video/mp4" />
                    </video>
                </div>


                <div className="flex items-center justify-center">
                    <div className="relative w-full max-w-screen-md md:mt-0 sm:mt-10">
                        <div className="relative h-0 pb-[80%] md:pb-[65%] mt-[180px] md:-mt-10 ">
                            <Image src={rhy} alt="logo" className=" mt-24 absolute inset-0 w-full object-contain" />  
                        </div>
 
                    </div>
                </div> 
            </header>


        </>
    );
};

export default Header;





