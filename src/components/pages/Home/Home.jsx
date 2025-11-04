import React, { Suspense } from "react";
import MySwiper from "../Swiper/MySwiper";
import Skills from "../Skills/Skills";
import Book from "../Book/Book";
import MyMarqee from "../MyMarquee/MyMarqee";

const Home = () => {
  return (
    <div className=" mt-0">
      {/* swiper section */}
      <section className="swiper-section">
        <MySwiper></MySwiper>
      </section>
      {/* skill section  */}
      <section className="skills-section my-32 text-center md:container mx-auto">
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <Skills></Skills>
        </Suspense>
      </section>
      {/* marquee section  */}

      <section>
        <MyMarqee></MyMarqee>
      </section>
      {/* book section */}
      <section className="book-section my-20 flex justify-center bg-linear-to-t from-[#2f4d6e] to-[#161e2c] shadow-base-100 opacity-50">
        <Book></Book>
      </section>
    </div>
  );
};

export default Home;
