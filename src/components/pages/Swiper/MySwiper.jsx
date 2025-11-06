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
          src="https://i.ibb.co.com/jK2Q0F2/Gemini-Generated-Image-1rozk71rozk71roz.png"
          alt="Digital Marketing Banner"
          className="w-full h-full rounded-xl object-cover"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="https://i.ibb.co.com/bjxc0Yt4/Gemini-Generated-Image-nl0novnl0novnl0n.png"
          alt="Digital Marketing Banner"
          className="w-full h-full rounded-xl object-cover"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="https://i.ibb.co.com/NdBgLZt3/Gemini-Generated-Image-del4rpdel4rpdel4.png"
          alt="Digital Marketing Banner"
          className="w-full h-full rounded-xl object-cover"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="https://i.ibb.co.com/6JtQjDxL/Gemini-Generated-Image-rcz8xbrcz8xbrcz8.png"
          alt="Digital Marketing Banner"
          className="w-full h-full rounded-xl object-cover"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="https://i.ibb.co.com/8DSbYkWB/Gemini-Generated-Image-cknbf2cknbf2cknb.png"
          alt="Digital Marketing Banner"
          className="w-full h-full rounded-xl object-cover"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="https://i.ibb.co.com/93bXCgGf/Gemini-Generated-Image-vts19tvts19tvts1.png"
          alt="Digital Marketing Banner"
          className="w-full h-full rounded-xl object-cover"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="https://i.ibb.co.com/LD5cm70G/Gemini-Generated-Image-tpw1hotpw1hotpw1.png"
          alt="Digital Marketing Banner"
          className="w-full h-full rounded-xl object-cover"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="https://i.ibb.co.com/Ng0n62vg/Gemini-Generated-Image-gtg1rygtg1rygtg1.png"
          alt="Digital Marketing Banner"
          className="w-full h-full rounded-xl object-cover"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default MySwiper;
