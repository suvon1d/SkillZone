import React, { use } from "react";
import TopRatedProviderCard from "../TopRatedProviderCard/TopRatedProviderCard";
const dataPromise = fetch("/skillsData.json").then((res) => res.json());
const TopRatedProvider = () => {
  const data = use(dataPromise);
  const providerData = [...data].slice(0, 6);

  return (
    <div className="px-5">
      <h2
        className="text-5xl font-bold text-primary text-center mb-12"
        data-aos="fade-up"
      >
        Top Rated Providers
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {providerData.map((providerSkill) => (
          <TopRatedProviderCard
            key={providerSkill.skillId}
            providerSkill={providerSkill}
          ></TopRatedProviderCard>
        ))}
      </div>
    </div>
  );
};

export default TopRatedProvider;
