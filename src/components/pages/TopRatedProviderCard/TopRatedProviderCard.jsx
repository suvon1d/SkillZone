import React from "react";
import { FaStar } from "react-icons/fa";

const TopRatedProviderCard = ({ providerSkill }) => {
  return (
    <div className="bg-[#224469] border border-gray-200 rounded-xl p-6 text-center transition transform hover:-translate-y-2">
      <img
        src={providerSkill.image}
        alt={providerSkill.providerName}
        className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-purple-500"
      />

      <h3 className="text-2xl font-bold mt-4">{providerSkill.providerName}</h3>

      <p className="text-3xl font-black text-amber-400">
        {providerSkill.category}
      </p>

      <div className="flex justify-center items-center gap-1 mt-3">
        <FaStar className="text-yellow-500" />
        <span className="text-emerald-500 font-black text-xl">
          {providerSkill.rating}
        </span>
      </div>
    </div>
  );
};

export default TopRatedProviderCard;
