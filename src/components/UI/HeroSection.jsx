import Lottie from "lottie-react";

import WorldExlplore from "../../../public/WorldExplore.json"

import { FaLongArrowAltRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <main className='hero-section main'>
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className='heading-xl'>Explore the World, One Country at a Time</h1>
          <p className="paragraph">
            Discover the history, culture, and beauty of the world through the lens of one country at a time.
          </p>
          <button className="btn btn-darken btn-inline bg-white-box">Start Exploring <FaLongArrowAltRight /> </button>
        </div>
        <div className="hero-image">
          {/* <img src="/images/hero.avif" alt="world beauty"  /> */}
          <Lottie className="banner-image" animationData={WorldExlplore} loop={true} />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;