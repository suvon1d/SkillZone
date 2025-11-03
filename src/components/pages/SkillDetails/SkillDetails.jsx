import React from "react";
import {
  FaUserGraduate,
  FaEnvelope,
  FaCoins,
  FaUsers,
  FaStar,
  FaGraduationCap,
} from "react-icons/fa";

import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const SkillDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [skillsData, setSkillsData] = useState({});
  useEffect(() => {
    const skillDetails = data.find((skill) => skill.skillId == id);
    setSkillsData(skillDetails);
  }, [data, id]);

  const {
    skillName,
    providerName,
    providerEmail,
    price,
    rating,
    slotsAvailable,
    description,
    image,
    category,
  } = skillsData;
  return (
    <div className="my-24">
      <div className="md:container mx-auto max-w-md relative rounded-xl bg-linear-to-t from-[#1b2a3a] to-[#4e78a8]">
        {/* price badge */}
        <div className="hidden md:block absolute top-4 -left-14 -rotate-45 bg-linear-to-r from-[#154922] to-[#3d5a80] py-2 px-20 rounded-xl">
          <p className="text-xl text-[#eac435] font-extrabold">
            Course Fee <br />
            <span className="text-[#d66853] text-lg">{price}</span> BDT
          </p>
        </div>
        <div className="p-5 text-center">
          <h2 className="font-black text-4xl">{category}</h2>
        </div>
        <div>
          <img
            src={image}
            alt={skillName}
            className="h-60 md:h-[700px] w-full object-cover"
          />
        </div>
        {/* rating badge */}
        <div className="relative">
          <div className="absolute left-6/13 -top-4  bg-yellow-500 text-base-100 font-black py-1 px-5 rounded-full flex items-center gap-1 shadow-md">
            {rating}
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        {/* Body Section */}
        <div className="px-6 py-8 space-y-4 modal-middle">
          <p className="text-[#eac435] text-2xl font-extrabold">
            Course Fee <br />
            <span className="text-[#d66853] text-6xl">{price}</span> BDT
          </p>

          <p className="flex items-center gap-2 text-4xl text-[#00a6fb] font-extrabold">
            <FaGraduationCap /> {skillName}
          </p>

          <p className="flex items-center gap-2 text-xl text-[#3DC2EC] font-extrabold">
            <FaUsers /> Slots Available: {slotsAvailable}
          </p>

          <p className="text-xl text-[#3DC2EC] font-extrabold flex items-center gap-2">
            <FaUserGraduate /> Provider Name: {providerName}
          </p>

          <p className="flex items-center gap-2 text-xl text-[#3DC2EC] font-extrabold">
            <FaEnvelope /> Provider Email: {providerEmail}
          </p>

          <p className="text-xl text-[#3DC2EC] font-semibold  text-center md:w-2/4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillDetails;
