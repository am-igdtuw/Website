import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Form from '../Components/FormSection/SponsorUs';

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