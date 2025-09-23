import React from "react";
import Hero from "../components/Hero";
import FeaturedDestination from "../components/FeaturedDestination";
import ExcluseiveOffers from "../components/ExcluseiveOffers";
import Testimonial from "../components/Testimonial";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedDestination />
      <ExcluseiveOffers />
      <Testimonial />
      <NewsLetter />
    </>
  );
};

export default Home;
