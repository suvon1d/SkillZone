import React from "react";
import Marquee from "react-fast-marquee";
import MarqeeCard from "../MarqeeCard/MarqeeCard";

const MyMarqee = () => {
  return (
    <Marquee
      speed={60}
      pauseOnHover={true}
      className="text-xl font-bold"
    >
      <MarqeeCard></MarqeeCard>
    </Marquee>
  );
};

export default MyMarqee;
