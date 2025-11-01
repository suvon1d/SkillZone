import React from "react";

const Skill = ({ skill }) => {
  const { image, skillName, rating, price, category } = skill;
  return (
    <div className="card bg-base-100 shadow-sm group">
      <figure className="h-64 w-full rounded-2xl ">
        <img
          src={image}
          alt={category}
          className="h-full w-full object-cover transition-transform duration-700 ease-out-in group-hover:scale-105"
        />
      </figure>
      <div className="card-body text-start">
        <h2 className="card-title">{skillName}</h2>
        <p className="text-lg font-semibold">
          Rating: <span className="text-[#00a6fb]">{rating}</span>
        </p>
        <p className="text-lg text-[#d66853] font-extrabold">
          Course Fee <span className="text-[#eac435] text-xl">{price}</span> BDT
        </p>
        <div className="card-actions justify-start">
          <button className="btn btn-xs btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Skill;
