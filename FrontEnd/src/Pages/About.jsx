import React from 'react';
import Header from '../Components/header';
import Footer from '../Components/Footer';

const About = () => {
  return (
    <div className=" bg-gradient-to-r from-white via-gray-100 to-white  montserrat-font1 p-4">
      <Header />
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">About Us</h1>
      
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Welcome to <strong>Swad Desi</strong>, your destination for authentic Indian cuisine that brings the vibrant flavors of every region right to your plate. At Swad Desi, we celebrate the diverse culinary heritage of India with every dish we serve.
      </p>
      
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Our team of passionate chefs handcraft each meal using time-honored recipes, fresh spices, and high-quality ingredients sourced with care. Whether you’re craving North Indian butter chicken or South Indian dosa, we deliver the taste of tradition with a modern twist.
      </p>
      
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Whether you dine with us or order online, we aim to offer an unforgettable experience that combines homely comfort with restaurant-quality meals. Enjoy delicious desi food—anytime, anywhere.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Swad Desi began in 2021 with a simple goal: to make traditional Indian food more accessible while staying true to its roots. What started as a home kitchen quickly grew into a beloved platform for food lovers who long for the taste of home, no matter where they are.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Our mission is to preserve the soul of Indian cuisine while innovating for convenience and reach. We strive to bring generations together around meals that speak of culture, comfort, and connection.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        Got questions or want to partner with us? Reach out at <a href="mailto:hello@swaddesi.in" className="text-orange-600 underline">hello@swaddesi.in</a> or drop by our kitchen for a chat and a chai!
      </p>

      <Footer />
    </div>
  );
};

export default About;
