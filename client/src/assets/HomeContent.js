import React from 'react';
import "./HomeContentStyles.css";


import Techno from '../svg/Techno.svg';
import coin from '../svg/Coin.svg';

import AII from '../svg/AI.svg';
import web from '../svg/Web.svg';
import App from '../svg/App.svg';
import saas from '../svg/saas.svg';
import soft from '../svg/Soft.svg';
import cyber from '../svg/Cyber.svg';
// import Background_Video from "../assets/Background_Video.mp4";

// import IntroImg from "../assets/Intro-bg.jpg";
// <img className="Intro-Img" src={IntroImg} alt="IntroImg" />


import ShakeHands from "../assets/ShakeHands.png";




import { Link } from "react-router-dom";

const HomeContent = () => {
  return (
    <div className="technoid">

      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 mask">
          </div>
          <div className="col-12 col-lg-6 content">


            <div id="ContainerLH">
              <div class="container px-4 py-5" id="featured-3">
                <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">

                  <div class="feature4 col">
                    <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"></div>

                    <div class="sn1">
                      <h3 id="H331">Technoid </h3>
                    </div>

                  </div>


                  <div class="feature4 col">
                    <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"></div>

                    <div class="sn2">
                      <h3 id="H33">Connecting Talent</h3>
                    </div>


                  </div>



                  <div class="sn23">
                    <p id="H33p">Welcome to the intersection of innovation and technology, where we bring to life the digital experiences you envision. Our dedicated team offers bespoke solutions in <span className="bold-text">Website Development</span> , sculpting pixel-perfect, responsive websites that catalyze growth and augment your digital footprint. Venture further with our advanced <span className="bold-text"> App Development</span> service, turning ideas into compelling mobile applications that serve as perfect solutions for your customers' needs. As proficient <span className="bold-text">Tech Recruiters</span> , we bridge the gap between extraordinary talent and the IT industry, ensuring you always have access to top-tier skills. Our IT Solutions go beyond the ordinary, providing tailor-made strategies that streamline operations and enhance efficiency. At the heart of our services lies a commitment to <span className="bold-text">Cyber Security</span> , offering robust solutions that fortify your digital landscape against threats. With a proven track record in Software Implementations, we facilitate the seamless integration of new technologies into your operations. As part of this, we harness the power of <span className="bold-text">Artificial Inteligence</span> to develop intelligent applications that are capable of self-learning and improving with every interaction, providing your users with a unique, personalized experience.</p>
                  </div>


                </div>
              </div>
            </div>



            <div className="row shakehandDiv">
              <div className="col-12 col-lg-6">
                <img className="ShakeHands" src={ShakeHands} alt="ShakeHands" />
              </div>
              <div className="col-12 col-lg-6">



              </div>
            </div>

            <p id="Home_ptag">A Decade of Pursuing Impactful Career Goals.</p>
            <p id="Home_p2">Leverage Our Significant Growth in Technology Expertise and Decade of Experience to Drive Effective Solutions to Your Problems.</p>

            <div className="col-12 col-lg-6">
              <Link to="/contact" className=" btn-light-hands"> Contact </Link>
              <Link to="/about" className="btn-light-hands">About us </Link>
            </div>

            <div id="container_main">

              <div className="left1">


                <h3 id="new12" style={{ fontSize: '19px', lineHeight: 1.6, color: '#808080', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>

                  Have an app Idea?{' '}
                  <span style={{ fontSize: '40px', color: 'black' }} className="custxt">
                    We can develop it at the lowest cost you
                    can find.
                  </span>{' '}
                  <br />
                </h3>




              </div>

              <div className="right">
                <p id="new13">Our roots are in the data center, but we have evolved to become cloud experts, specializing in Workday. We recognize the importance of your choice to implement Workday as an ERP solution, a significant step towards digital transformation and modernizing HR practices. Although implementation is a crucial stage, ongoing post-production activities are just as vital for the success of any product. We provide a range of techno-functional services to help you meet your current HR needs, optimize and fully leverage the capabilities of the Workday ecosystem, and achieve the maximum return on investment. </p>

              </div>
            </div>


            <div id="Img_main">

              <div id="img_container">



                <div class="container px-4 py-5" id="featured-3">
                 
                  <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div className="feature col " >
                      <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">

                      </div>
                      <div className="services-icon">
                        <div>
                          <object type="image/svg+xml" data={AII}>

                          </object>
                        </div>
                      </div>


                      <div className="service-name">
                        <h3 id="sixx">AI Integration</h3>
                      </div>


                      <div className="service-text ">
                        <p id="six">Unleash AI Power: Seamlessly integrate AI into your business. Enhance efficiency, automate tasks, and gain insights. Stay ahead with our AI integration.</p>
                      </div>

                    </div>

                    <div className="feature col " >
                      <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">

                      </div>
                      <div className="services-icon">
                        <div>
                          <object type="image/svg+xml" data={web}>

                          </object>
                        </div>
                      </div>


                      <div className="service-name">
                        <h3 id="sixx">Web Development</h3>
                      </div>

                      <div className="service-text ">
                        <p id="six">Craft Digital Experiences: Transform ideas into stunning websites. Expert team, sleek designs, smooth navigation. Bring your vision to life online.</p>
                      </div>

                    </div>




                    <div className="feature col " >
                      <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">

                      </div>


                      <div className="services-icon">
                        <div>
                          <object type="image/svg+xml" data={App}>

                          </object>
                        </div>
                      </div>


                      <div className="service-name">
                        <h3 id="sixx">App Development</h3>
                      </div>

                      <div className="service-text ">
                        <p id="six">Engage, Inspire, Connect: Build powerful mobile apps. Captivate your audience. iOS, Android. Leave a lasting impression.</p>
                      </div>

                    </div>
                  </div>
                </div>



              </div>



              <div id="img_container_2">



                <div class="container px-4 py-5" id="featured-3">
                  
                  <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">


                    <div className="feature col " >
                      <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">

                      </div>
                      <div className="services-icon">
                        <div>
                          <object type="image/svg+xml" data={saas}>

                          </object>
                        </div>
                      </div>


                      <div className="service-name">
                        <h3 id="sixx">Saas Solution</h3>
                      </div>

                      <div className="service-text ">
                        <p id="six">Streamline Operations: Optimize workflows with SaaS. Scalable, secure, cost-effective. Embrace cloud-based simplicity.</p>
                      </div>

                    </div>



                    <div className="feature col " >
                      <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">

                      </div>
                      <div className="services-icon">
                        <div>
                          <object type="image/svg+xml" data={soft}>

                          </object>
                        </div>
                      </div>


                      <div className="service-name">

                        <h3 id="sixx">Software Development</h3>
                      </div>

                      <div className="service-text ">
                        <p id="six">Customized Solutions: Unlock technology's potential. Tailor-made software for your unique needs. Experience efficiency and innovation.</p>
                      </div>

                    </div>


                    <div className="feature col " >
                      <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">

                      </div>
                      <div className="services-icon">
                        <div>
                          <object type="image/svg+xml" data={cyber}>

                          </object>
                        </div>
                      </div>


                      <div className="service-name">
                        <h3 id="sixx">Cyber Security</h3>
                      </div>

                      <div className="service-text ">
                        <p id="six">Protect Your Assets: Safeguard data and infrastructure. Comprehensive cybersecurity services. Stay safe from evolving threats.</p>
                      </div>

                    </div>




                  </div>
                </div>



              </div>
            </div>

            <div>

              <div id="img_container_3">



                <div class="container px-4 py-5" id="featured-3">
              
                  <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">


                    <div className="feature2 col " >
                      <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">

                      </div>
                      <div className="services-icon">
                        <div>
                          <object type="image/svg+xml" data={coin}>

                          </object>
                        </div>

                      </div>


                      <div className="service-name">
                        <h3 id="H32">Rineo Coin</h3>
                      </div>


                      <div className="service-text ">
                      <p id="PID4">Dive into the world of digital currency with Rineo Coin. Mine and harness the potential of this innovative cryptocurrency. Embrace a decentralized future and join the crypto revolution with Rineo Coin.</p>
                      </div>


                    </div>



                    <div className="feature2 col " >
                      <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">

                      </div>
                      <div className="services-icon">
                        <div>
                          <object type="image/svg+xml" data={Techno}>

                          </object>
                        </div>
                      </div>


                      <div className="service-name">
                        <h3 id="H32">TikTechno</h3>
                      </div>

                      <div className="service-text ">
                        <p id="PID4">A solution which uses the power of AI to deliver human like Instrument playing.



                        </p>
                      </div>

                    </div>






                  </div>
                </div>
              </div>

              <div id="container-4">

                <h1 id="h10">Versatile Delivery According to the Needs!</h1>
                <p id="h11"> WITH THE INDUSTRY'S LEADING BUSINESSES</p>

              </div>

              <div id="container-5">

                <h1 id="h10">OUR CLIENTS</h1>



              </div>


            </div>




          </div>




        </div>
      </div>
    </div>
  );
};

export default HomeContent;




// <div>
//                    <Link to="/contact" className="btn2 btn-light"> Contact </Link>
//                 </div>



// import "./HomeContentStyles.css";

// import React from 'react';
// import Techno from '../svg/Techno.svg';
// import coin from '../svg/Coin.svg';

// import AII from '../svg/AI.svg';
// import web from '../svg/Web.svg';
// import App from '../svg/App.svg';
// import saas from '../svg/saas.svg';
// import soft from '../svg/Soft.svg';
// import cyber from '../svg/Cyber.svg';
// // import Background_Video from "../assets/Background_Video.mp4";

// // import IntroImg from "../assets/Intro-bg.jpg";
// // <img className="Intro-Img" src={IntroImg} alt="IntroImg" />


// // import ShakeHands from "../assets/ShakeHands.png";




// // import { Link } from "react-router-dom";

// // const HomeContent = () => {
// //   return (
// //     <div className="technoid">

// //       <div className="container">
// //         <div className="row">
// //           <div className="col-12 col-lg-6 mask">
// //           </div>
// //           <div className="col-12 col-lg-6 content">


// //             <div id="ContainerLH">
// //               <div class="container px-4 py-5" id="featured-3">
// //                 <h2 class="pb-2 border-bottom"></h2>
// //                 <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">

// //                   <div class="feature4 col">
// //                     <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"></div>

// //                     <div class="sn1">
// //                       <h3 id="H331">Technoid </h3>
// //                     </div>

// //                   </div>


// //                   <div class="feature4 col">
// //                     <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"></div>

// //                     <div class="sn2">
// //                       <h3 id="H33">Connecting Talent</h3>
// //                     </div>


// //                   </div>



// //                   <div class="sn23">
// //                     <p id="H33p">Welcome to the intersection of innovation and technology, where we bring to life the digital experiences you envision. Our dedicated team offers bespoke solutions in Website Development, sculpting pixel-perfect, responsive websites that catalyze growth and augment your digital footprint. Venture further with our advanced App Development service, turning ideas into compelling mobile applications that serve as perfect solutions for your customers' needs. As proficient Tech Recruiters, we bridge the gap between extraordinary talent and the IT industry, ensuring you always have access to top-tier skills. Our IT Solutions go beyond the ordinary, providing tailor-made strategies that streamline operations and enhance efficiency. At the heart of our services lies a commitment to Cyber Security, offering robust solutions that fortify your digital landscape against threats. With a proven track record in Software Implementations, we facilitate the seamless integration of new technologies into your operations. As part of this, we harness the power of AI to develop intelligent applications that are capable of self-learning and improving with every interaction, providing your users with a unique, personalized experience.</p>
// //                   </div>


// //                 </div>
// //               </div>
// //             </div>



// //             <div className="row shakehandDiv">
// //               <div className="col-12 col-lg-6">
// //                 <img className="ShakeHands" src={ShakeHands} alt="ShakeHands" />
// //               </div>
// //               <div className="col-12 col-lg-6">



// //               </div>
// //             </div>

// //             <p id="Home_ptag">A Decade of Pursuing Impactful Career Goals.</p>
// //             <p id="Home_p2">Leverage Our Significant Growth in Technology Expertise and Decade of Experience to Drive Effective Solutions to Your Problems.</p>

// //             <div className="col-12 col-lg-6">
// //               <Link to="/contact" className=" btn-light-hands"> Contact </Link>
// //               <Link to="/about" className="btn-light-hands">About us </Link>
// //             </div>

// //             <div id="container_main">

// //               <div className="left1">


// //                 <h3 id="new12" style={{ fontSize: '19px', lineHeight: 1.6, color: '#808080', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>

// //                   Have an app Idea?{' '}
// //                   <span style={{ fontSize: '40px', color: 'black' }} className="custxt">
// //                     We can develop it at the lowest cost you
// //                     can find.
// //                   </span>{' '}
// //                   <br />
// //                 </h3>




// //               </div>

// //               <div className="right">
// //                 <p id="new13">Our roots are in the data center, but we have evolved to become cloud experts, specializing in Workday. We recognize the importance of your choice to implement Workday as an ERP solution, a significant step towards digital transformation and modernizing HR practices. Although implementation is a crucial stage, ongoing post-production activities are just as vital for the success of any product. We provide a range of techno-functional services to help you meet your current HR needs, optimize and fully leverage the capabilities of the Workday ecosystem, and achieve the maximum return on investment. </p>

// //               </div>
// //             </div>


// //             <div id="Img_main">

// //               <div id="img_container">



// //                 <div class="container px-4 py-5" id="featured-3">
// //                   <h2 class="pb-2 border-bottom"></h2>
// //                   <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
// //                     <div className="feature col " >
// //                       <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">

// //                       </div>
// //                       <div className="services-icon">
// //                         <div>
// //                           <object type="image/svg+xml" data={AII}>

// //                           </object>
// //                         </div>
// //                       </div>


// //                       <div className="service-name">
// //                         <h3 id="sixx">AI Integration</h3>
// //                       </div>


// //                       <div className="service-text ">
// //                         <p id="six">Unleash AI Power: Seamlessly integrate AI into your business. Enhance efficiency, automate tasks, and gain insights. Stay ahead with our AI integration.</p>
// //                       </div>

// //                     </div>

// //                     <div className="feature col " >
// //                       <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">

// //                       </div>
// //                       <div className="services-icon">
// //                         <div>
// //                           <object type="image/svg+xml" data={web}>

// //                           </object>
// //                         </div>
// //                       </div>


// //                       <div className="service-name">
// //                         <h3 id="sixx">Web Development</h3>
// //                       </div>

// //                       <div className="service-text ">
// //                         <p id="six">Craft Digital Experiences: Transform ideas into stunning websites. Expert team, sleek designs, smooth navigation. Bring your vision to life online.</p>
// //                       </div>

// //                     </div>




// //                     <div className="feature col " >
// //                       <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">

// //                       </div>


// //                       <div className="services-icon">
// //                         <div>
// //                           <object type="image/svg+xml" data={App}>

// //                           </object>
// //                         </div>
// //                       </div>


// //                       <div className="service-name">
// //                         <h3 id="sixx">App Development</h3>
// //                       </div>

// //                       <div className="service-text ">
// //                         <p id="six">Engage, Inspire, Connect: Build powerful mobile apps. Captivate your audience. iOS, Android. Leave a lasting impression.</p>
// //                       </div>

// //                     </div>
// //                   </div>
// //                 </div>



// //               </div>



// //               <div id="img_container_2">



// //                 <div class="container px-4 py-5" id="featured-3">
// //                   <h2 class="pb-2 border-bottom"></h2>
// //                   <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">


// //                     <div className="feature col " >
// //                       <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">

// //                       </div>
// //                       <div className="services-icon">
// //                         <div>
// //                           <object type="image/svg+xml" data={saas}>

// //                           </object>
// //                         </div>
// //                       </div>


// //                       <div className="service-name">
// //                         <h3 id="sixx">Saas Solution</h3>
// //                       </div>

// //                       <div className="service-text ">
// //                         <p id="six">Streamline Operations: Optimize workflows with SaaS. Scalable, secure, cost-effective. Embrace cloud-based simplicity.</p>
// //                       </div>

// //                     </div>



// //                     <div className="feature col " >
// //                       <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">

// //                       </div>
// //                       <div className="services-icon">
// //                         <div>
// //                           <object type="image/svg+xml" data={soft}>

// //                           </object>
// //                         </div>
// //                       </div>


// //                       <div className="service-name">

// //                         <h3 id="sixx">Software Development</h3>
// //                       </div>

// //                       <div className="service-text ">
// //                         <p id="six">Customized Solutions: Unlock technology's potential. Tailor-made software for your unique needs. Experience efficiency and innovation.</p>
// //                       </div>

// //                     </div>


// //                     <div className="feature col " >
// //                       <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">

// //                       </div>
// //                       <div className="services-icon">
// //                         <div>
// //                           <object type="image/svg+xml" data={cyber}>

// //                           </object>
// //                         </div>
// //                       </div>


// //                       <div className="service-name">
// //                         <h3 id="sixx">Cyber Security</h3>
// //                       </div>

// //                       <div className="service-text ">
// //                         <p id="six">Protect Your Assets: Safeguard data and infrastructure. Comprehensive cybersecurity services. Stay safe from evolving threats.</p>
// //                       </div>

// //                     </div>




// //                   </div>
// //                 </div>



// //               </div>
// //             </div>

// //             <div>

// //               <div id="img_container_3">



// //                 <div class="container px-4 py-5" id="featured-3">
// //                   <h2 class="pb-2 border-bottom"></h2>
// //                   <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">


// //                     <div className="feature2 col " >
// //                       <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">

// //                       </div>
// //                       <div className="services-icon">
// //                         <div>
// //                           <object type="image/svg+xml" data={coin}>

// //                           </object>
// //                         </div>

// //                       </div>


// //                       <div className="service-name">
// //                         <h3 id="H32">Rineo Coin</h3>
// //                       </div>


// //                       <div className="service-text ">
// //                       <p id="PID4">Dive into the world of digital currency with Rineo Coin. Mine and harness the potential of this innovative cryptocurrency. Embrace a decentralized future and join the crypto revolution with Rineo Coin.</p>
// //                       </div>


// //                     </div>



// //                     <div className="feature2 col " >
// //                       <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">

// //                       </div>
// //                       <div className="services-icon">
// //                         <div>
// //                           <object type="image/svg+xml" data={Techno}>

// //                           </object>
// //                         </div>
// //                       </div>


// //                       <div className="service-name">
// //                         <h3 id="H32">TikTechno</h3>
// //                       </div>

// //                       <div className="service-text ">
// //                         <p id="PID4">A solution which uses the power of AI to deliver human like Instrument playing.



// //                         </p>
// //                       </div>

// //                     </div>






// //                   </div>
// //                 </div>
// //               </div>

// //               <div id="container-4">

// //                 <h1 id="h10">Versatile Delivery According to the Needs!</h1>
// //                 <p id="h11"> WITH THE INDUSTRY'S LEADING BUSINESSES</p>

// //               </div>

// //               <div id="container-5">

// //                 <h1 id="h10">OUR CLIENTS</h1>



// //               </div>


// //             </div>




// //           </div>




// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default HomeContent;