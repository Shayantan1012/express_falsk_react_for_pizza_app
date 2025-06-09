import React from 'react';
import Header from '../Components/header';
import Footer from '../Components/Footer';

const About = () => {
  return (
    <div className=" bg-gradient-to-r from-amber-50 to-orange-300   montserrat-font1 p-4">
    <Header/>
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">About Us</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Welcome to <strong>Pizza Delight</strong>, your go-to destination for mouthwatering, handcrafted pizzas. At Pizza Delight, we believe that great pizza starts with the freshest ingredients and a passion for flavor.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Our chefs carefully select premium ingredients, from our homemade dough to our signature sauces and gourmet toppings. Whether you're a fan of classic Margherita or adventurous BBQ Chicken, we have something to satisfy every craving.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        We are committed to delivering an exceptional dining experience, whether you're enjoying your pizza in our cozy restaurant or from the comfort of your home through our fast and reliable delivery service.
      </p>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Founded in 2020, Pizza Delight began as a small family-owned pizzeria with a dream to share our love for pizza with the community. Over the years, we've grown into a beloved local favorite, thanks to our dedication to quality and customer satisfaction.
      </p>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Our mission is simple: to create unforgettable moments through delicious pizza. We aim to bring families and friends together over a shared love for great food.
      </p>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        Have questions or feedback? Feel free to reach out to us at <a href="mailto:contact@pizzadelight.com" className="text-blue-600 underline">contact@pizzadelight.com</a> or visit us at our store.
      </p>
      <Footer/>
    </div>
  );
};

export default About;
