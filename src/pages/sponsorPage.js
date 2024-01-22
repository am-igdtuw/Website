import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Form from '../Components/FormSection/SponsorUs';
import Loader from '../Components/Loader/loader';

const SponsorPage = () => {
  return (
      <div>
          <Navbar />
          {/* <Loader /> */}
          <Form />
          <Footer/>
    </div>
  );
};

export default SponsorPage;