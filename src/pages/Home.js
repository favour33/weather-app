import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar} from 'swiper';

import TopBar from '../components/topBar';
import MiddleImage from "../components/Middle-Image";
import ConditionsBar from "../components/conditionsBar";
import BottomBar from "../components/BottomBar";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


SwiperCore.use([Navigation,Pagination])
const data=[
  {
    id:1,
    username:'aaa',
    testimonial:'filler'
  },
  {
    id:2,
    username:'aaa',
    testimonial:'filler'
  },
  {
    id:3,
    username:'aaa',
    testimonial:'filler'
  }
  ]
const Home = () => {

  const result = localStorage.getItem('list-locations')
  const getDict = JSON.parse(result)
  console.log(getDict)
  return (
    <>
    <Swiper 
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{clickable:true}}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
    >
      <div>
      {data.map(user=>(
      <SwiperSlide key={user.id} className="slide">
        <div className="topContainerParent">
          <TopBar />
        </div>
        <div className="middleContainerParent">
          <MiddleImage />
        </div>
        <div className="conditionsContainerParent">
          <ConditionsBar />
        </div>
        <div className="bottomContainerParent">
          <BottomBar />
        </div>
      </SwiperSlide>
    ))}
      </div>
      </Swiper>
    </>
  );
};

export default Home;
