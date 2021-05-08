import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./style.css";
import Lido1 from "../../assets/images/ployh.png";
import Lido2 from "../../assets/images/lidosamplepic2.png";

import SwiperCore, { Pagination, Navigation } from "swiper/core";

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

SwiperCore.use([Pagination, Navigation]);

export const ImageCarousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide data-hash="slide1">
          <Image src={Lido1} />
        </SwiperSlide>
        <SwiperSlide data-hash="slide2">
          <Image src={Lido2} />
        </SwiperSlide>
        <SwiperSlide data-hash="slide3">Slide 3</SwiperSlide>
        <SwiperSlide data-hash="slide4">Slide 4</SwiperSlide>
        <SwiperSlide data-hash="slide5">Slide 5</SwiperSlide>
        <SwiperSlide data-hash="slide6">Slide 6</SwiperSlide>
        <SwiperSlide data-hash="slide7">Slide 7</SwiperSlide>
        <SwiperSlide data-hash="slide8">Slide 8</SwiperSlide>
        <SwiperSlide data-hash="slide9">Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
};
