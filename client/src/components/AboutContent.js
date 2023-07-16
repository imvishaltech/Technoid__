import React from "react";
import "./AboutContentStyles.css";
import { Link } from "react-router-dom";


const AboutContent = () => {
  

  return (
    
      <div className="about d-flex">
        <div className="left1 p-5">
          <h1 id="abt_h1">The Services We Provide.</h1>
          <ul id="p_tag2" className="list-unstyled">
            <li className="li_1">
              We help businesses and organizations fill open positions in the
              tech industry, such as software development, IT support, and data
              analysis.
            </li>
            <li className="li_1">
              We assist in the hiring process by pre-screening applicants,
              scheduling interviews, and providing feedback to both the
              applicant and the employer.
            </li>
            <li className="li_1">
              We offer additional services such as resume writing to help job
              seekers improve their chances of finding employment.
            </li>
            <li className="li_1">
              We provide career counseling to help job seekers identify and
              pursue opportunities in the tech industry.
            </li>
            <li className="li_1">
              We work with both employers and job seekers to help match the
              right people with the right positions.
            </li>
          </ul>
          <Link to="/contact">
            <button className="btn btn-primary">Let's Connect</button>
          </Link>
        </div>
      </div>
    
  );
};

export default AboutContent;



// import "./AboutContentStyles.css";


// import { Link } from "react-router-dom";

// const AboutContent = () => {
  

//   return (
//     <div className="about d-flex"> 
//       <div className="left p-5">  
//         <h1 id="abt_h1">The Services We Provide.    </h1>
//         <ul id="p_tag2" className="list-unstyled">
//           <li className="li_1">We help businesses and organizations fill open positions in the tech industry, such as software development, IT support, and data analysis.</li>
//           <li className="li_1"> We assist in the hiring process by pre-screening applicants, scheduling interviews, and providing feedback to both the applicant and the employer.</li>
//           <li className="li_1">    We offer additional services such as resume writing to help job seekers improve their chances of finding employment.</li>
//           <li className="li_1">  We provide career counseling to help job seekers identify and pursue opportunities in the tech industry.</li>
//           <li className="li_1">  We work with both employers and job seekers to help match the right people with the right positions.</li>
//         </ul>
//         <Link to="/contact"> 
//           <button className="btn btn-primary">Let's Connect</button>
//         </Link>
//       </div>
      
//     </div>
//   )
// }

// export default AboutContent