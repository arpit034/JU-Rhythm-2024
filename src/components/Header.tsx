import Image from 'next/image';
import logo from '../images/logo.png'
import ULOGO from '../images/ULOGO.png'
import logoText from '../images/logo_text.png';

const Header = () => {
    return (
        <>
            <header>
                <div className="relative inset-x-0 overflow-hidden">

                    <video autoPlay muted 
                        className='absolute inset-0 w-full h-full object-cover'
                        style={{ position: 'fixed', width: '100%', height: '142vh', objectFit: 'cover', zIndex: -3, opacity: .9 }}>
                        <source src="video1.mp4" type="video/mp4" />
                    </video>
                </div> 
                
                        <div className="relative h-0">
                        <button className="button-49" role="button">Register Now</button>
                        </div>
                 
            </header>


        </>
    );
};

export default Header;





