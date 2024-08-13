import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Grid, Typography } from "@mui/material";
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

  const customH1Styles = {
    background: "-webkit-linear-gradient( 120deg, #D9D9D9 10%, #F8B228 90%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    backgroundSize: "200%",
    backgroundPosition: "50% 50%",
    fontSize: "2.7rem",
    fontWeight: "600",
    fontFamily: "Exo 2, sans-serif",
    color: "transparent",
    // margin: "0 !important",
    animation: "gradientAnimation 6s ease-in-out infinite",
    "@keyframes gradientAnimation": {
      "0%": {
        backgroundPosition: "0 50%",
      },
      "50%": {
        backgroundPosition: "100% 50%",
      },
      "100%": {
        backgroundPosition: "0 50%",
      },
    },
    "@media screen and (max-width: 480px)": {
      fontSize: "2.1rem",
      fontWeight: "800",
    },
  };

  return (
    <>
      <Typography
                  variant="h4"
                  color="#ffffe6"
                  align="center"
                  marginTop="55px"
                  sx={customH1Styles}
                >
                  Create your Profile
      </Typography>
      
      <div className="form-div">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-element">
              <FaUser className='form-icon' />
              <input type="text" placeholder="Name" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
            </div>
            <div className="form-element">
              <FaEnvelope className='form-icon' />
              <input type="email" placeholder="Email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
            </div>
            <div className="form-element">
              <FaPhone className='form-icon' />
              <input type="number" placeholder="Phone No." id="phone_no" name="contactNumber" value={formData.contactNumber} onChange={handleInputChange} min="1000000000" required />
            </div>
            <div className="form-element">
              <FaBuilding className='form-icon' />
              <input type="text" placeholder="Branch" id="branch" name="branch" value={formData.branch} onChange={handleInputChange} required />
            </div>
            <div className="loading-overlay" style={{ display: loading ? 'flex' : 'none' }}>
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
