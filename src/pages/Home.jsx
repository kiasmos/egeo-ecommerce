import image1 from "../assets/ezgif-4-fa20280b0a.jpg";
import image2 from "../assets/ezgif-4-012429bfda.jpg";
import image3 from "../assets/IMAGE-landscape-fill-d21faa0a-7ccb-4d1d-aa7c-e7d5885cf35d-default_0.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
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
        className="mySwiper"
      >
        <SwiperSlide
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              zIndex: "999",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p className="shop-review">Classic yet cool. Made for you.</p>
            <p className="shop-title">
              Life is too short to wear boring clothes
            </p>
            <button type="button" className="shop-button">
              SHOP NOW
            </button>
          </div>
          <img
            style={{ width: "100%", objectFit: "cover", height: "90vh" }}
            src={image1}
            alt="#"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              zIndex: "999",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p className="shop-review">Classic yet cool. Made for you.</p>
            <p className="shop-title">
              Life is too short to wear boring clothes
            </p>
            <button type="button" className="shop-button">
              SHOP NOW
            </button>
          </div>
          <img
            style={{ width: "100%", objectFit: "cover", height: "90vh" }}
            src={image2}
            alt="#"
          />{" "}
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              zIndex: "999",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p className="shop-review">Classic yet cool. Made for you.</p>
            <p className="shop-title">
              Life is too short to wear boring clothes
            </p>
            <button type="button" className="shop-button">
              SHOP NOW
            </button>
          </div>
          <img
            style={{ width: "100%", objectFit: "cover", height: "90vh" }}
            src={image3}
            alt="#"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
