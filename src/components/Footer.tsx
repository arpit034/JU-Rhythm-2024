import React from 'react'

const Footer = () => {
    return (
        <footer aria-label="Site Footer" className="foot">
            <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="flex justify-start text-black">
                    <h1 className='team1 text-7xl'>Contact Us </h1>
                </div>
                <div className="flex justify-start text-black mt-2">
                    <p className=' text-xl'>  In case of any query or problem feel free to visit our office or contact the following numbers for the same</p>
                </div>
                <div className="flex justify-start text-black">
               
                <svg className="w-6 h-6 text-black mt-2 mx-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2 C7.03 2 3 6.03 3 11 C3 16.55 12 22 12 22 C12 22 21 16.55 21 11 C21 6.03 16.97 2 12 2 Z"></path>
                        <circle cx="12" cy="11" r="4"></circle>
                      </svg>
                      <p className="text-xl mt-2  text-black ">
                      Plot No. IS-2036 to IS-2039 Ramchandrapura Industrial Area
                      Jaipur, Sitapura, Vidhani, Rajasthan 303905
                </p>
                </div>
               
               
                
                {/* <div className="mt-8 border-t border-black-100 pt-8 flex justify-center">
                    </div> */}
                    <div className="text-center sm:grid sm:justify-start sm:text-left grid-col-2  mt-7">
                    

                        <p className="mt-4 text-xl  text-black-500 sm:order-first sm:mt-0">
                            Technical head-
                        </p>
                        <p className="mt-4 text-xl  text-black-500 sm:order-first sm:mt-0">
                            Cultural head-
                        </p>
                        <p className="mt-4 text-xl  text-black-500 sm:order-first sm:mt-0">
                           Sports head-
                        </p>  
                        <p className="mt-4 text-xl  text-black-500 sm:order-first sm:mt-0">
                            Media head-
                        </p>
                        <p className="mt-4 text-xl  text-black-500 sm:order-first sm:mt-0">
                            sdo@jecrcu.edu.in
                        </p>
                       

                    </div>
                    <div>
                  
                    </div>
                    <div className="flex justify-center text-black mt-4 text-2xl">
                    <p className="text-100px  text-white sm:order-first sm:mt-0">
                          &copy; Copyright JU-RHYTHM 2024. All Rights Reserved
                        </p>
                        </div>
                        <div className="flex justify-center text-black mt-8 text-2xl">
                    <p className="text-100px text-white sm:order-first sm:mt-0">
                          &copy; Devloped and designed by Arpit Sharma || Devansh Verma 
                        </p>
                        </div>
                        
                  

               
            </div>
        </footer >)
}
{/* <div id="contact" class="form-2">
<div class="container">
    <div class="row">
        <div class="col-lg-7">
            <div class="text-container">
                <div class="section-title text-white" style="font-family: 'Nasalization', sans-serif;letter-spacing: 2px;">CONTACT</div>
                <p class="text-white">In case of any query or problem feel free to visit our office or contact the following numbers for the same </p>
                <ul class="list-unstyled li-space-lg">
                    <li class="address text-white"><i class="fas fa-map-marker-alt"></i>Plot No. IS-2036 to IS-2039 Ramchandrapura Industrial Area<br> Jaipur, Sitapura, Vidhani, Rajasthan 303905</li>
                    <li><i class="fas fa-phone "></i><a class="text-white" href="tel:9521979660">Technical Head: +91 95219 79660</a></li>
                    <li><i class="fas fa-phone"></i><a class="text-white" href="tel:8290807182">Cultural Head: +91 82908 07182</a></li>
                    <li><i class="fas fa-phone "></i><a class="text-white" href="tel:9558527290">Sports Head: +91 95585 27290</a></li>
                    <li><i class="fas fa-phone"></i><a class="text-white" href="tel:9602052221">Business Head: +91 96020 52221</a></li>
                    <li><i class="fas fa-phone"></i><a class="text-white" href="tel:9530157329">Promotion Head: +91 95301 57329</a></li>
                    <li><i class="fas fa-envelope"></i><a class="text-white" href="mailto:sdo@jecrcu.edu.in">sdo@jecrcu.edu.in</a></li>
                </ul>
                <h3 class="text-white" style="font-family: 'Nasalization', sans-serif;letter-spacing: 2px;">Follow Us On Social Media</h3>

                <span class="fa-stack">
                    <a target="_blank" href="https://www.facebook.com/JecrcUniversity/">
                        <span class="hexagon"></span>
                        <i class="fab fa-facebook-f fa-stack-1x"></i>
                    </a>
                </span>
                <span class="fa-stack">
                    <a target="_blank" href="https://instagram.com/rhythm.ju?utm_medium=copy_link ">
                        <span class="hexagon"></span>
                        <i class="fab fa-instagram fa-stack-1x"></i>
                    </a>
                </span>
                <span class="fa-stack">
                    <a target="_blank" href="https://www.linkedin.com/company/student-council-jecrc-university/">
                        <span class="hexagon"></span>
                        <i class="fab fa-linkedin-in fa-stack-1x"></i>
                    </a>
                </span>
            </div> <!-- end of text-container -->
        </div> <!-- end of col -->
        <div class="col-lg-5">
            <div class="image-container">
                <img class="img-fluid" src="images/bg20.jpg" alt="alternative" style="border-radius: 10%; border: 2px solid #030d1a;">
            </div> <!-- end of image-container -->
        </div> <!-- end of col -->
        <div class="col-lg-12">
            <h2 style="font-size:15px" class="text-center text-white">© Copyright JU-RHYTHM 2022. All Rights Reserved </h2>
            <h2 style="font-size:15px" class="text-center text-white">Designed by <a style="color:#2e86c1;" href="https://www.linkedin.com/in/aabhashkesharwani/"> Aabhash Kesharwani</a> | <a style="color:#2e86c1;" href="https://www.linkedin.com/in/varun-choudhary-3271051b8">Varun 
            Choudhary</a> | <a style="color:#2e86c1;" href="https://www.linkedin.com/in/manjeetkumar002/">Manjeet Kumar</a></h2>
            <h2 style="font-size:15px" class="text-center text-white">Graphics Designed by <a style="color:#2e86c1;" href="https://www.linkedin.com/in/vijay-ojha/"> Vijay Ojha</a> | 
                <a style="color:#2e86c1;" href="https://www.linkedin.com/in/khushal-chhabra/">Khushal Chhabra</a> | <a style="color:#2e86c1;" href="https://www.linkedin.com/in/bhagyesh-j-377925200/">Bhagyesh</a></h2>
            <h2 style="font-size:15px" class="text-center text-white"><a style="color:#2e86c1;" href="https://drive.google.com/file/d/1IZFeV7eijppBbUwMK2sWiUIxb54aQYhx/view?usp=sharing" target="_blank">Terms & Conditions</a></h2>
        </div>
    </div> <!-- end of row -->
</div> <!-- end of container -->
</div> <!-- end of form-2 -->
<!-- end of contact --> */}

export default Footer