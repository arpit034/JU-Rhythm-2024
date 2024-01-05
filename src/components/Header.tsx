import Image from 'next/image';



const Header = () => {
    return (
        <>
            <header>
                <div className="relative inset-x-0 overflow-hidden">
                    <video autoPlay muted loop
                        className='absolute inset-0 w-full h-full object-cover'
                        style={{ position: 'fixed', width: '100%', height: '142vh', objectFit: 'cover', zIndex: -3, opacity: .9 }}>
                        {/* <source src="" width={400} height={100} type="video/mp4" /> */}
                        <iframe src="https://www.veed.io/embed/afa7b0ca-f0b1-4538-b84c-6e9a7dc2a01d" width="744" height="504"></iframe>
                    </video>
                </div>


                <div className="flex items-center justify-center">
                    <div className="relative w-full max-w-screen-md md:mt-0 sm:mt-10">
                        <div className="relative h-0 pb-[80%] md:pb-[65%] mt-[180px] md:-mt-10 ">
                            <Image src="https://i.postimg.cc/T15JDFSQ/rhythm-logo.png" alt="logo" className=" mt-24 absolute inset-0 w-full object-contain" width={100} height={100}/>  
                        </div>
                       
                    </div>
                </div> 
            </header>


        </>
    );
};

export default Header;





