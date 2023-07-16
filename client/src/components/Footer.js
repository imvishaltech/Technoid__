import "./FooterStyles.css";
import React from 'react';
import { Link } from "react-router-dom"
// import log from "../assets/log.png";
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaFacebook } from "react-icons/fa";
const Footer = () => {
    return (


       
        <footer class="footer-distributed">
        
                    <div class="footer-left">
        
                        <h3>Technoid<span> </span></h3>
        
                        <p class="footer-links">
                            <a href="/" class="link-1">Home</a>
                           






                            <Link to="/Expertise">Expertise</Link>
                        
                            <a href="/Contact">Contact</a>
                        
                            <a href="/About">About</a>
                            
                            <a href="/DashRoute">Dashboard</a>
                            
                           
                        </p>
        
                        <p class="footer-company-name">© 2013 - 2023 Technoid. All rights reserved</p>
                    </div>
        
                    <div class="footer-center">
        
                        <div>
                            <i class="fa fa-map-marker"></i>
                            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            <p><span> 611 South DuPont Highway,
                            </span> Suite 102, Dover, DE 19901
                            <i class="fa fa-map-marker"></i>
                           
                            <span> Suite N-220 , 255 Old New Brunswick Rd., 
                            </span> Piscataway, NJ 08854</p>
                        </div>
        
                        <div>
                            <i class="fa fa-phone"></i>
                            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            <p> PH:+1 (732) 646-3718 </p>
                        </div>
        
                        <div>
                        <i class="fa fa-envelope"></i>
                        <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                                    
                           
                            <p><a href="mailto:Hr@technoidusa.com"> Hr@technoidusa.com</a></p>
                        
                        </div>
        
                    </div>
        
                    <div class="footer-right">
        
                        <p class="footer-company-about">
                            <span>About the company</span>
                            Technoid is a company specializing in IT and digital technology, established in 2013 with its main office located in Dover on South DuPont Highway. The company's aim is to create cutting-edge software and offer their clients cost-efficient technology solutions that are quick and adaptable to their needs.
                        </p>
        
                        <div class="footer-icons">
                        
        
                            <a href="https://www.facebook.com/profile.php?id=100091558797908" target="_new"><FaFacebook size={30} style={{ color: "#ffffff", marginRight: "1rem" }} /></a>
                            <a href="https://www.linkedin.com/company/technoid-llc/about/"><FaLinkedin size={30} style={{ color: "#ffffff", marginRight: "1rem" }} /></a>
                        
        
                        </div>
        
                    </div>
        
                </footer>


        
//         <div className="footer" >
//             <div className="footer-container">
            
                           
//                 <div className="left">
//                     <div className="location">
//                         <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
//                         <div>
                        
                        

                        

//                             <p> 611 South DuPont Highway,  </p>
//                             <p> Suite 102, Dover, DE 19901 </p>
//                         </div>
//                     </div>
//                     <div className="phone">
//                         <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
//                         PH:8444936249 Cell:6602385412

//                         </h4>
//                     </div>
//                     <a href="mailto:harshit@technoidusa.com ">
//                     <div className="email" >
//                       <h4>
//                         <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
//                         harshit@technoidusa.com

//                       </h4>
//                     </div>
//                   </a>
//                 </div>
//                 <div className="right">
//                 <h4> About Us</h4>
//                 <p>  </p>
//                 <div className="social">
                
//                 <a href=">
//                 <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />
//                 </a>

                
//                 <a href= target="_new">
//                  
//             </a>

            
 

//                 </div>
//                 </div>
//                 <div className="footer_bottom"><p id="bottom_p"> © 2013 - 2023 Technoid. All rights reserved </p></div>
                
//             </div>
//         </div>
    )
}

export default Footer
