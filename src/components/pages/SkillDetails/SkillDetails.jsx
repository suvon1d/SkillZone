import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import SkillDetailsCard from "../SkillDetailsCard/SkillDetailsCard";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";

const SkillDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [skillsData, setSkillsData] = useState({});
  useEffect(() => {
    const skillDetails = data.find((skill) => skill.skillId == id);
    setSkillsData(skillDetails);
  }, [data, id]);

  return (
    <div>
      <header>
        <NavBar></NavBar>
      </header>
      <main className="my-24">
        <SkillDetailsCard skillsData={skillsData}></SkillDetailsCard>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default SkillDetails;
