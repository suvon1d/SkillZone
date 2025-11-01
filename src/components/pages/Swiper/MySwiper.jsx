import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper.css";

const MySwiper = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper px-40"
    >
      <SwiperSlide>
        <img
          src="https://i.ibb.co.com/b5Zkjjyn/Gemini-Generated-Image-5w2qqv5w2qqv5w2q.png"
          alt="Digital Marketing Banner"
          className="w-fit md:w-full h-fit md:h-full rounded-xl"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="https://i.ibb.co.com/Mxmm1XFQ/Gemini-Generated-Image-dg5iq7dg5iq7dg5i.png"
          alt="Digital Marketing Banner"
          className="w-fit md:w-full h-fit md:h-full  rounded-xl"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="https://i.ibb.co.com/Mxmm1XFQ/Gemini-Generated-Image-dg5iq7dg5iq7dg5i.png"
          alt="Digital Marketing Banner"
          className="w-fit md:w-full h-fit md:h-full  rounded-xl"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="https://i.ibb.co.com/Mxmm1XFQ/Gemini-Generated-Image-dg5iq7dg5iq7dg5i.png"
          alt="Digital Marketing Banner"
          className="w-fit md:w-full h-fit md:h-full  rounded-xl"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="https://i.ibb.co.com/Mxmm1XFQ/Gemini-Generated-Image-dg5iq7dg5iq7dg5i.png"
          alt="Digital Marketing Banner"
          className="w-fit md:w-full h-fit md:h-full  rounded-xl"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="https://i.ibb.co.com/Mxmm1XFQ/Gemini-Generated-Image-dg5iq7dg5iq7dg5i.png"
          alt="Digital Marketing Banner"
          className="w-fit md:w-full h-fit md:h-full  rounded-xl"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="https://i.ibb.co.com/Mxmm1XFQ/Gemini-Generated-Image-dg5iq7dg5iq7dg5i.png"
          alt="Digital Marketing Banner"
          className="w-fit md:w-full h-fit md:h-full  rounded-xl"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="https://i.ibb.co.com/Mxmm1XFQ/Gemini-Generated-Image-dg5iq7dg5iq7dg5i.png"
          alt="Digital Marketing Banner"
          className="w-fit md:w-full h-fit md:h-full  rounded-xl"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="https://i.ibb.co.com/Mxmm1XFQ/Gemini-Generated-Image-dg5iq7dg5iq7dg5i.png"
          alt="Digital Marketing Banner"
          className="w-fit md:w-full h-fit md:h-full rounded-xl"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default MySwiper;
