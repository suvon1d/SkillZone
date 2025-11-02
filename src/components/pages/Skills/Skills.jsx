import React, { use } from "react";
import Skill from "../Skill/Skill";

const skillPromise = fetch("/skillsData.json").then((res) => res.json());
const Skills = () => {
  const skills = use(skillPromise);
  return (
    <div className="text-center space-y-32">
      <h2 className="text-5xl font-bold text-primary">
        Prepare Yourself for <br /> the Future
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <Skill key={skill.skillId} skill={skill}></Skill>
        ))}
      </div>
    </div>
  );
};

export default Skills;
