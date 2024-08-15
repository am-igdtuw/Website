import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUser, FaEnvelope, FaPhone, FaBuilding } from 'react-icons/fa';
import Loader from '../Loader/loader.js';
import MobileLoader from '../Loader/mobileLoader.js';
import './style.css';

const ProfilePage = () => {
  const [loading, setLoading] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    branch: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://am-website-w70g.onrender.com/api/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Profile created successfully', {
          position: "bottom-center",
          style: {
            width: "400px",
            background: "black",
            color: "white",
          },
        });

        setFormData({
          name: '',
          email: '',
          contactNumber: '',
          branch: '',
        });

        // setTimeout(() => {
        //   window.location.href = '/';
        // }, 3000);

      } else {
        console.error('Profile update failed');
        toast.error('Update failed, Retry!', {
          position: "bottom-center",
          style: {
            width: "400px",
            background: "black",
            color: "white",
          },
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Update failed, Retry!', {
        position: "bottom-center",
        style: {
          width: "400px",
          background: "black",
          color: "white",
        },
      });
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <h1 className='dheading'>Create Your Profile</h1>
      <div className="dform-div">
        <div className="dform-container">
          <form onSubmit={handleSubmit}>
            <div className="dform-element">
              <FaUser className='dform-icon' />
              <input type="text" placeholder="Name" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
            </div>
            <div className="dform-element">
              <FaEnvelope className='form-icon' />
              <input type="email" placeholder="Email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
            </div>
            <div className="dform-element">
              <FaPhone className='dform-icon' />
              <input type="number" placeholder="Phone No." id="phone_no" name="contactNumber" value={formData.contactNumber} onChange={handleInputChange} min="1000000000" required />
            </div>
            <div className="dform-element">
              <FaBuilding className='dform-icon' />
              <input type="text" placeholder="Branch" id="branch" name="branch" value={formData.branch} onChange={handleInputChange} required />
            </div>
            <div className="dloading-overlay" style={{ display: loading ? 'flex' : 'none' }}>
              {isMobileView ? <MobileLoader /> : <Loader />}
              <p>Loading...</p>
            </div>
            <input type="submit" value={loading ? 'Submitting...' : 'Submit'} disabled={loading} />
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ProfilePage;
