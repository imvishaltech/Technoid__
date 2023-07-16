import React from 'react'

import Navbar  from "../components/Navbar"

import Footer from '../components/Footer'

import Contact_content from '../assets/Contact_content'


import MyForm from '../components/MyForm';

const Contact = () => {
  return (
    <div>
    <Navbar />
    
    <Contact_content heading="CONTACT." text= " Lets conversation here."   />
    
    <MyForm/>
    
    <Footer />
    </div>
  )
}


export default Contact;