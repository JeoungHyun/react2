import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import { useRef } from "react";
import Clock from 'react-live-clock'
SwiperCore.use([Navigation, Pagination]);
function App() {

  var date = new Date();

  return (
    <>
      <div className="header">
        <div className="title">타이틀</div>
      </div>
      <div className="main">
        <div className="swiper">
          <Swiper
            className="banner"
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <img src="" width="189px" height="189px" />
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
          </Swiper>
        </div>
        <div className="today-history">
          <div className="today-history-title">오늘 기록</div>
          <div className="today-history-time">
            <Clock format={'YYYY년 MM월 DD일  A h시mm분'} ticking={true}/>
          </div>
        </div>
        <div className="history-wrap">
          <ul className="history-list">
            <li>
              <div>복약</div>
              <div>오늘 복약 기록이 없습니다.</div>
            </li>
            <hr/>
            <li>
              <div>수면</div>
              <div>어제 수면 기록이 없습니다.</div>
            </li>
            <hr/>
            <li>
              <div>컨디션</div>
              <div>오늘 컨디션 기록이 없습니다.</div>
            </li>
          </ul>
        </div>
        <div className="picture-wrap">
          <ul className="picture-list">
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      </div>
      <div className="footer">3</div>
    </>
  );
}

export default App;
