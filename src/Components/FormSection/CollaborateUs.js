import React from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';


const CollaborateUsForm = () => {
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    contactNumber:'',
    organization:'',
    message:'',
    twitter:'',
    linkedin:'',
    instagram:'',
  });

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const response = await fetch('https://am-website-w70g.onrender.com/api/collaborate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
        });

        if(response.ok){
          const data = await response.json();
          //console.log(data);

          toast.success('Collaboration request sent successfully');

          setFormData({
            name: '',
            email: '',
            contactNumber: '',
            organization: '',
            message: '',
            twitter: '',
            linkedin: '',
            instagram: '',
          });
    
          setTimeout(() => {
            window.location.href = '/';
          }, 3000);
        } else {
          console.error('Collaboration request failed');
          toast.error('Request failed, Retry!');
        }
      } catch (error){
        console.error('Error:', error);
        toast.error('Request failed, Retry!');
      } 
  };

  return (
    <>
      <h1>Collaborate Us</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-element">
            <label htmlFor="name"><i className="fa-solid fa-user"></i></label>
            <input type="text" placeholder="Name" id="name" name="name" value={formData.name} onChange={handleInputChange} /><br />
          </div>

          <div className="form-element">
            <label htmlFor="email"><i className="fa-solid fa-envelope"></i></label>
            <input type="email" placeholder="Email" id="email" name="email" value={formData.email} onChange={handleInputChange} /><br />
          </div>
          
          <div className="form-element">
            <label htmlFor="phone_no"><i className="fa-solid fa-phone"></i></label>
            <input type="number" placeholder="Phone No." id="phone_no" name="contactNumber" value={formData.contactNumber} onChange={handleInputChange}/><br />
          </div>

          <div className="form-element">
            <label htmlFor="Company/Organisation"><i className="fa-solid fa-building"></i></label>
            <input type="text" placeholder="Company/Organisation" id="Company/Organisation" name="organization" value={formData.organization} onChange={handleInputChange}/><br />
          </div>

          <div className="form-element">
            <label htmlFor="textarea"><i className="fa-solid fa-memo"></i></label>
            <textarea placeholder="Collaboration Proposal" id="textarea" name="message" rows="4" cols="50" value={formData.message} onChange={handleInputChange}></textarea><br />
          </div>

          <div className="form-element">
            <label htmlFor="twitter_id"><i className="fa-brands fa-x-twitter"></i></label>
            <input type="text" placeholder="Twitter" id="twitter_id" name="twitter" value={formData.twitter} onChange={handleInputChange} /><br />
          </div>

          <div className="form-element">
            <label htmlFor="instagram_id"><i className="fa-brands fa-instagram"></i></label>
            <input type="text" placeholder="Instagram" id="instagram_id" name="instagram" value={formData.instagram} onChange={handleInputChange}/><br />
          </div>

          <div className="form-element">
            <label htmlFor="linkedin_id"><i className="fa-brands fa-linkedin"></i></label>
            <input type="text" placeholder="LinkedIn" id="linkedin_id" name="linkedin" value={formData.linkedin} onChange={handleInputChange}/><br />
          </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default CollaborateUsForm;
