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
    >
      <div>
      {getDict.map(dict=>(
        
      <SwiperSlide key={dict.key} className="slide">
        <div className="topContainerParent">
          <TopBar Location={dict.key} LatLon={dict.value}/>
        </div>
        <div className="middleContainerParent">
          <MiddleImage />
        </div>
        <div className="conditionsContainerParent">
          <ConditionsBar LatLon={dict.value}/>
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
