import React, { Suspense } from "react";
import MySwiper from "../Swiper/MySwiper";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div className=" mt-0">
      <section className="swiper-section">
        <MySwiper></MySwiper>
      </section>

      <section className="skills-section my-32 text-center md:container mx-auto">
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <Skills></Skills>
        </Suspense>
      </section>
    </div>
  );
};

export default Home;
