import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

export default function Home() {
  return (
    <>
      <Hero hero="defaultHero">
        <div>
          <video src="/videos/foodsreel.mp4" autoPlay loop muted />
        </div>
      </Hero>
      <Banner title="Luxurious Rooms" subtitle="deluxe rooms starting at 300$">
        <Link to="/rooms" className="btn btn-primary">
          Our Rooms
        </Link>
      </Banner>
      <Services />
      <FeaturedRooms />
    </>
  );
}
