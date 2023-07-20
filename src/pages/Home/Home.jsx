import Swipers from "../../components/Home/Swiper";
import arrow from "../../assets/arrow.svg";

export default function App() {
  return (
    <>
      <Swipers />
      <div className="main-home">
        <div className="get-started">
          <div className="get-started-div">Sign up for news & get 20% off</div>
          <button className="get-started-btn">
            GET STARTED <img src={arrow} alt="#" />
          </button>
        </div>

        <div className="photos-grid">
          <div>
            <img src="" alt="" />
            <div>ALL NEW!</div>
            <div>SPRING THINGS</div>
            <p>Save up to 30% off</p>
            <a href="" style={{ cursor: "pointer" }}>
              SHOP NOW
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
