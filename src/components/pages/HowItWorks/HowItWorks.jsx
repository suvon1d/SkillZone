import { FaSearch, FaUsers, FaBookOpen, FaAward } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section className="how-it-works-section  py-20 mt-24">
      <div className="md:container mx-auto px-4">
        <h2 className="text-5xl font-bold text-primary text-center mb-12">
          How It's Works
        </h2>

        <div className=" grid md:grid-cols-4 gap-8 mt-20">
          <div className="bg-[#224469] p-8 rounded-xl shadow hover:shadow-lg hover:-translate-y-2 transition">
            <FaSearch className="text-4xl text-purple-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-center">Browse Skills</h3>
            <p className="text-amber-600 text-center text-sm mt-2">
              Explore thousands of skill development courses.
            </p>
          </div>

          <div className="bg-[#224469] p-8 rounded-xl shadow hover:shadow-lg hover:-translate-y-2 transition">
            <FaUsers className="text-4xl text-blue-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-center">
              Choose Provider
            </h3>
            <p className="text-amber-600 text-center text-sm mt-2">
              Select the best trainers with top ratings.
            </p>
          </div>

          <div className="bg-[#224469] p-8 rounded-xl shadow hover:shadow-lg hover:-translate-y-2 transition">
            <FaBookOpen className="text-4xl text-green-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-center">
              Start Learning
            </h3>
            <p className="text-amber-600 text-center text-sm mt-2">
              Learn with structured lessons and real projects.
            </p>
          </div>

          <div className="bg-[#224469] p-8 rounded-xl shadow hover:shadow-lg hover:-translate-y-2 transition">
            <FaAward className="text-4xl text-yellow-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-center">
              Earn Certificate
            </h3>
            <p className="text-amber-600 text-center text-sm mt-2">
              Get certified and boost your career.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
