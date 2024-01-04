
'use client';

import { Button, Navbar } from 'flowbite-react';
import Image from 'next/image';

function NewNavBar() {
    /*change the logo with a high res in 12 line*/ 
  return (
    <Navbar fluid rounded className=' bg-transparent '>
      <Navbar.Brand href="">
        <Image src="https://i.postimg.cc/Hk1ytJ5H/UNI-LOGO-1.png" alt='JECRC LOGO' className='w-40 ml-16'/>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" className='team2 text-3xl'>
          Home
        </Navbar.Link>
        <Navbar.Link href="/events" className='team2 text-3xl'>Event</Navbar.Link>
        <Navbar.Link href="/gallery" className='team2 text-3xl'>Gallery</Navbar.Link>
        <Navbar.Link href="/ourteam" className='team2 text-3xl'>Our Team</Navbar.Link>
        <Navbar.Link href="sponsors" className='team2 text-3xl'>Sponsors</Navbar.Link>
        <Navbar.Link href="/contactus" className='team2 text-3xl'>Contact Us</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NewNavBar;
