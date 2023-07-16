import './DashboardStyles.css';
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import NavLogOut3 from './NavLogOut3' 
import * as XLSX from 'xlsx';

const socket = io('http://localhost:3000/contact', { origin: 'http://localhost:3000:*' });


const Dashboard = () => {


  
  
  const [submissions, setSubmissions] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/contact');
        setSubmissions(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);


  useEffect(() => {
    // Connect to the server using socket.io


    // Listen for the "submission_updated" event
    socket.on('submission_updated', updatedSubmission => {
      // Update the submissions state with the new data
      setSubmissions(prevSubmissions => {
        return prevSubmissions.map(submission => {
          if (submission._id === updatedSubmission._id) {
            return updatedSubmission;
          } else {
            return submission;
          }
        });
      });
    });



    // Cleanup function to disconnect from the server when component unmounts
    return () => {
      socket.disconnect();
    };
  }, [])

  /////////////////////////////////////////

  
  
   

  const handleDelete = async id => {
    try {
      // Send a DELETE request to the server to delete the submission
      const res = await axios.delete(`/contact/${id}`);
      console.log('Submission deleted:', res.data);
    } catch (err) {
      console.error(err);
    }
  }

  ///////////////////////////////

  const container = {
    position: 'relative'
   
}


    const exportToExcel = () => {
      // get data from the table
      const data = submissions.map(submission => {
          return [submission.name, submission.email, submission.number, submission.message];
      });
      data.unshift(["Name", "Email", "Number", "Message"]); // add headers
      // create a worksheet
      const ws = XLSX.utils.aoa_to_sheet(data);
      // create a workbook
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Contact Form Submissions");
      // download the file
      XLSX.writeFile(wb, "ContactFormSubmissions.xlsx");
 
      
    }

    
////
  ///////////////////////////////////////////
  return (
    <div>
<NavLogOut3 />

<h1 id="title-css">Contact Form Submissions Data <button id="export-btn" class="excel-btn" onClick={exportToExcel}>Export to Excel</button></h1>
      

    
<div className="dashboard" style={container}>
     
      <table>
      
        <thead>
          <tr id="column-css">
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map(submission => (
            <tr key={submission._id}>
              <td>{submission.name}</td>
              <td>{submission.email}</td>
              <td>{submission.number}</td>
              <td>{submission.message}</td>
              <td>

              <button id="del-btn" className="del-btn" onClick={() => handleDelete(submission._id)}>
              Delete
              </button>
              </td>
             

             

            </tr>
          ))}
      
        </tbody>

      </table>




    </div>
    </div>
  );




}




export default Dashboard;

