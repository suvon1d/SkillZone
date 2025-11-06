import React, { Suspense } from "react";
import MySwiper from "../Swiper/MySwiper";
import Skills from "../Skills/Skills";
import Book from "../Book/Book";
import MyMarqee from "../MyMarquee/MyMarqee";
import Loading from "../Loading/Loading";
import TopRatedProvider from "../TopRatedProvider/TopRatedProvider";
import HowItWorks from "../HowItWorks/HowItWorks";
import StudentReview from "../StudentReview/StudentReview.jsx";

const Home = () => {
  return (
    <div className=" mt-0">
      {/* swiper section */}

      <section className="swiper-section">
        <MySwiper></MySwiper>
      </section>

      {/* skill section  */}

      <section className="skills-section my-32 text-center md:container mx-auto">
        <Suspense fallback={<Loading></Loading>}>
          <Skills></Skills>
        </Suspense>
      </section>

      {/* marquee section  */}

      <section className="marquee-section">
        <MyMarqee></MyMarqee>
      </section>

      {/* top-rated-provider section  */}

      <section className="top-rated-provider my-32 md:container mx-auto">
        <Suspense fallback={<Loading></Loading>}>
          <TopRatedProvider></TopRatedProvider>
        </Suspense>
      </section>

      {/* How it's work section  */}

      <section className="how-it's-work-section">
        <HowItWorks></HowItWorks>
      </section>

      {/* student review section  */}

      <section className="student-review-section">
        <StudentReview></StudentReview>
      </section>
    </div>
  );
};

export default Home;
