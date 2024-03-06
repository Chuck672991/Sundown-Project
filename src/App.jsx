import SheriyanCard from "../SheriyanCard";
import "./App.css";
import "./index.css";
import Circle from "./components/Circle";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Center from "./componentstwo/Center";
import Nav from "./componentstwo/Nav";
import LocomotiveScroll from "locomotive-scroll";
import MovingText from "./componentstwo/MovingText";
import PageTwoBottom from "./componentstwo/PageTwoBottom";
import Gooturguu from "./componentstwo/Gooturguu";

function App() {
  const data = [
    {
      name: "This is Asbah",
      img: "https://images.unsplash.com/photo-1519009843775-0105e5e6d92c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "She is Pagal",
      img: "https://images.unsplash.com/photo-1519009843775-0105e5e6d92c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "This is Asbah",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLO_qoY29tCnS9UJ-n9YhDT3g3cGXGAwzCStLXBlSC4g&s",
    },
    {
      name: "This is Asbah",
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d739627d-10db-4484-a1a6-e6c7dee25f2c/d93zzyg-ef30cbce-f5e8-4b8c-bbe9-6ce9ae0e703f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q3Mzk2MjdkLTEwZGItNDQ4NC1hMWE2LWU2YzdkZWUyNWYyY1wvZDkzenp5Zy1lZjMwY2JjZS1mNWU4LTRiOGMtYmJlOS02Y2U5YWUwZTcwM2YucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.haJy92MWwBY_2UCVJDU3KBih_xWlc3TgWTG5Nc0Q09A",
    },
    {
      name: "This is Asbah",
      img: "https://piktochart.com/wp-content/uploads/2023/10/large-202.jpg",
    },
  ];

  useEffect(() => {
    // const scroll = new LocomotiveScroll({
    //   el: document.querySelector("#main"),
    //   smooth: true,
    // });
  }, []);
  const [hover, sethover] = useState(null);

  return (
    
    <div data-scroll-container className="main-container">
       

      {hover !== null && (
        <img src={data[hover].img} className="hoverimg" alt="not found" />
      )}
      <div data-scroll-container id="main">
        <div data-scroll-section id="page1">
          <Nav data-scroll />
          <Center data-scroll />
          <Circle data-scroll />

          <video
            autoPlay
            muted
            loop
            src="https://sheryislive.github.io/sundown/video.mp4"
          ></video>
        </div>
        <div data-scroll-section id="page2">
          <MovingText />
          <PageTwoBottom />
          <Gooturguu />
        </div>
        <div data-scroll-section id="page3">
          {data.map((item, index) => {
            return (
              <>
                <div
                  key={index}
                  onMouseEnter={() => sethover(index)}
                  onMouseLeave={() => sethover(null)}
                  className="elem"
                >
                  <div className="overlay"></div>
                  <h2>{item.name}</h2>
                </div>
              </>
            );
          })}
        </div>

        <div data-scroll-section id="page4">
        <Swiper
        // spaceBetween={30}
        // slidesPerView={4}
        // centeredSlides={true}
       
        // loop ={true}
        // pagination={{
        //   clickable: true,
        // }}
        // // navigation={true}
        // modules={[Autoplay, Pagination]}
        // className="mySwiper"
        slidesPerView={3}
        spaceBetween={100}

        centeredSlides={true}
        loop ={true}
        autoplay={{
          delay: 2400,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        // pagination={{
        //   clickable: true,
        // }} 
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        

      <SwiperSlide>
        <h1>hello</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eveniet harum, necessitatibus dolorum est commodi rerum consequatur nisi vero dolor labore error libero fugit suscipit totam quasi fuga, inventore culpa.
        Commodi obcaecati, culpa autem deserunt eius minus hic aspernatur. Eveniet dolorem, ut illo deleniti veritatis reiciendis laborum totam incidunt cupiditate! Eius sed quisquam possimus quaerat odit accusantium nobis reiciendis ipsam!
        Voluptatibus sed illo id repellendus eius nesciunt totam laboriosam nisi cupiditate. Quod commodi quidem modi, consequatur adipisci nobis repellendus delectus molestias eligendi praesentium rerum aliquam! Possimus reprehenderit modi tempora soluta.
        Vitae odit aliquid, adipisci assumenda similique quidem quod corrupti a dolor tempora accusamus voluptates voluptatum, ea iure totam atque excepturi neque sapiente. Repellendus aliquam exercitationem delectus ipsam dolorem nesciunt pariatur.
        Mollitia fugiat iusto error debitis inventore ea similique repellendus sit cumque neque cupiditate hic consequuntur dicta quod accusamus quas aperiam voluptatibus adipisci quasi, repudiandae expedita dolor cum ullam saepe! Ipsum.
        Neque magnam rem, illum nobis enim dignissimos, dolorem, quidem autem delectus ipsam doloribus modi dolores suscipit distinctio saepe vel culpa? In, rerum iure expedita hic facere ipsum ut aut eligendi?
        Suscipit iste rem, officiis dicta iusto quas ad perferendis molestiae voluptate quasi ullam odit, mollitia facere! Enim, sit culpa? Laudantium dignissimos, temporibus corporis ducimus quod eum sed. Cum, obcaecati placeat.
        Autem incidunt inventore consequatur aspernatur ipsum dolorum facere ut reprehenderit, quaerat, praesentium porro similique earum eos id veritatis veniam quasi quod laboriosam sed reiciendis in nam quia iste! Vitae, et.
        Reprehenderit quos, sed, totam placeat rerum dolorum harum qui repellendus culpa nisi voluptates in quasi omnis soluta consequuntur cupiditate eos. Molestias corporis iure quisquam eum nam, aperiam labore dolores repellat!
        Sit autem dolorem dolor dolorum voluptas debitis eligendi, vitae reiciendis, animi, ab accusamus vel qui natus earum dolore adipisci. Magnam ex perspiciatis libero facilis harum fuga doloremque quasi modi debitis!
        Id facere, quia sed laboriosam optio architecto temporibus quos numquam in itaque ex. Esse temporibus aliquid rem tempore saepe, assumenda eveniet magnam praesentium, impedit eius tenetur. Animi nam quae ipsa.
        Quam hic modi officia commodi dolorum harum nobis sequi perferendis, repudiandae facere repellendus et deserunt praesentium iste incidunt blanditiis. Vitae error aperiam iure, a beatae recusandae eaque quisquam quibusdam repellendus?
        Repellat voluptatem atque in consequatur ipsa expedita. Omnis, rem sapiente quos voluptatem nisi nam recusandae est dignissimos labore quidem laudantium magnam ab tempora quam praesentium. Iusto reiciendis veniam aliquid corrupti.
        Aperiam nisi magni dolor repellat unde dicta obcaecati, ipsum quas totam maxime. Inventore quaerat ipsum eligendi est expedita dignissimos quae, possimus et, non asperiores perferendis impedit, harum culpa repellat voluptatem?
        Quasi ipsam itaque placeat unde modi consectetur voluptatum, praesentium earum corrupti quidem non error. Magnam ut voluptatibus aspernatur, id dolore nam. Voluptates veniam aliquid cum nesciunt ratione fugiat neque deleniti.
        Ullam saepe et aliquam totam aspernatur pariatur fugit suscipit perferendis eaque eius ex autem quae odit nisi eveniet commodi, ipsa libero in similique numquam assumenda. Error enim hic eius at.
        Unde nemo autem velit tenetur saepe dolorum, soluta quibusdam sed ea aliquam, eveniet mollitia adipisci ab! Sed architecto tenetur, culpa magni alias adipisci eveniet blanditiis minus ex iure cupiditate. Commodi.
        Est perspiciatis sit nulla harum nesciunt sed labore quam libero pariatur nisi corrupti neque eligendi quasi veritatis quae, soluta sapiente dolore, amet consequatur aut, adipisci dolorem! Eius labore dolore exercitationem.
        Illum repellendus deserunt rerum sit veritatis officiis eos modi quos sequi, tempora perferendis harum fugit quae ipsa, sapiente at excepturi iste ex quo eum laudantium quisquam nesciunt aliquam laboriosam? Nisi!
        Qui porro cupiditate unde, reprehenderit illum eum vel repudiandae, adipisci aspernatur hic soluta quae libero consectetur ipsam dolores autem quidem eius nihil asperiores delectus consequatur voluptatibus est tempore obcaecati! Tenetur?
        Cum earum facilis itaque placeat nulla sunt tempora voluptatem fugit reprehenderit totam tenetur voluptas ducimus exercitationem vel ratione magnam aperiam, enim distinctio atque quo nisi deserunt quidem? Laboriosam, officia sapiente?
        Perferendis alias magnam rem, aliquam ipsam eius, exercitationem aperiam saepe neque, iusto hic odio quis expedita est voluptatum distinctio quisquam suscipit at commodi. Tenetur repellat possimus rem libero molestiae deleniti!
        Architecto laudantium exercitationem veniam aspernatur dolor illo, nobis dolorum repellendus autem fuga unde voluptatum nulla deleniti est quo eligendi porro ipsam, temporibus hic, quos accusamus quam maiores alias. Iusto, ut.
        Autem eius distinctio quibusdam eligendi suscipit facere iure necessitatibus sit explicabo saepe maiores, consectetur porro accusamus, quidem laudantium eos recusandae delectus ipsum inventore, sequi quam itaque molestias. Aspernatur, deleniti excepturi.
        Perspiciatis quod suscipit distinctio, recusandae quo ex exercitationem laborum dolor vitae non, tempora dolores at. Nostrum provident corrupti blanditiis deserunt tenetur vero repudiandae distinctio maiores asperiores vel. Velit, sint nemo.
        Quia quasi esse, animi, dicta dolorem quos laudantium magnam consectetur tempora oigendi quidem cumque! Dolor, voluptate. Laborum at rerum vel dignissimos ipsa sit!
        Sequi reprehenderit, quasi tempora fuga impedit debitis cupiditate. Dicta, eligendi eveniet obcaecati et deleniti veritatis sed reiciendis cum sunt excepturi distinctio? Iusto incidunt tenetur, modi dolore voluptatem autem officia ut?</p>
      </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>

        </div>
       
      </div>
      <div id="page5">
      
      <footer data-scroll-section id="footer">
      <div className="footlight">
          
          </div>
        <div className="footChilds">
          <div>
            <ul>
              <li>Eat</li>
              <li>sleeo</li>
              <li>Repeat</li>
            </ul>
          </div>
          <div>
          <ul>
              <li>Eat</li>
              <li>noteatt</li>
              <li>but sleeeeeep</li>
            </ul>
          </div>
        </div>
          <h1>Sundown</h1>
        <hr />

        </footer>
        
      </div>
      
    
    </div>
  );
}

export default App;
