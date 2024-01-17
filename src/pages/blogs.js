import React from 'react'
import BlogHeroSection from '../Components/BlogPage/BlogHeroSection';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


const BlogPage = () => {
  return (
    <div>
        <Navbar/>
        <BlogHeroSection />
        <Footer/>
    </div>
  );
};

export default BlogPage;