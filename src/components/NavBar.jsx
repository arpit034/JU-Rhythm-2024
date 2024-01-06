
'use client';
import { ChevronDown } from 'lucide-react';
import { Button, Navbar } from 'flowbite-react';
import Image from 'next/image';

function NewNavBar() {
    
  return (
    <>   
     <Navbar fluid rounded className=' bg-transparent '>
      <Navbar.Brand href="">
        <Image src="https://i.postimg.cc/Hk1ytJ5H/UNI-LOGO-1.png" width={100} height={100} alt='JECRC LOGO' className='w-40 ml-16'/>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" className='team2 text-3xl'>
          Home
        </Navbar.Link>
        
          <div className="group">
              <div className='flex justify-center items-center gap-2'>
              <Navbar.Link href="/events" className='team2 text-3xl'>Events </Navbar.Link>
             <ChevronDown className='text-white'/>
             </div>
            <div className="invisible dropdown-content absolute px-4 backdrop-blur-sm min-w-200px md:group-hover:visible md:hover:visible">
              <div className='flex gap-1'>
              <Navbar.Link href="/Media" className='team2 text-xl'>Media |</Navbar.Link>
              <Navbar.Link href="/sports" className='team2 text-xl '>Sports |</Navbar.Link>
              <Navbar.Link href="/cultural" className='team2 text-xl'>Cultural |</Navbar.Link>
              <Navbar.Link href="/technical" className='team2 text-xl'>Technical |</Navbar.Link>
            </div>
            </div>
          </div> 
          
          
          
        <Navbar.Link href="/gallery" className='team2 text-3xl'>Gallery</Navbar.Link>
        <Navbar.Link href="/ourteam" className='team2 text-3xl'>Our Team</Navbar.Link>
        <Navbar.Link href="sponsors" className='team2 text-3xl'>Sponsors</Navbar.Link>
        <Navbar.Link href="/contactus" className='team2 text-3xl'>Contact Us</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </>

  );
}
export default NewNavBar;
