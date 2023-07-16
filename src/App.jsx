import "./App.scss";
import "swiper/scss";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
  NavLink,
} from "react-router-dom";
import Home from "./pages/Home";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Kids from "./pages/Kids";
import Accessories from "./pages/Accessories";
import Sale from "./pages/Sale";
import New from "./pages/New";
import icnshipping from "./assets/icn_Shipping.svg";
import egeo from "./assets/logo_egeo.svg";
import icnsearch from "./assets/icn_search.svg";
import icnbasket from "./assets/icn_basket.svg";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/New" element={<New />} />
        <Route path="/Women" element={<Women />} />
        <Route path="/Men" element={<Men />} />
        <Route path="/Kids" element={<Kids />} />
        <Route path="/Accessories" element={<Accessories />} />
        <Route path="/Sale" element={<Sale />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <>
      <div
        className="head-ship"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "22px",
          width: "100%",
          height: "40px",
          backgroundColor: "#8F8977",
        }}
      >
        <img src={icnshipping} alt="#" />
        <p style={{ color: "white", fontSize: "15px" }}>
          FREE SHIPPING ON ORDERS OF $50 OR MORE
        </p>
        <p style={{ color: "white", fontSize: "10px" }}>DETAILS</p>
      </div>

      <div className="head-logo-search">
        <img src={egeo} alt="Gözlə logo gələcək" />
        <div style={{ display: "none" }}></div>
        <div className="search-wrap">
          <div className="search">
            <input type="text" className="searchTerm" placeholder="Search..." />
            <button type="submit" className="searchButton">
              <img src={icnsearch} alt="axtar bala" />
            </button>
          </div>
        </div>
        <div className="head-signin-singup">
          <div style={{ cursor: "pointer" }}>SIGN IN</div>
          <div className="line-solid"></div>
          <div style={{ cursor: "pointer" }}>SIGN UP</div>
          <div className="line-solid"></div>

          <img src={icnbasket} alt="#" />
          
        </div>
      </div>

      <nav className="links">
        <NavLink to="/" className="menu-link underline">
          HOME
        </NavLink>
        <NavLink to="/New" className="menu-link underline">
          NEW
        </NavLink>
        <NavLink to="/Women" className="menu-link underline">
          WOMEN
        </NavLink>
        <NavLink to="/Men" className="menu-link underline">
          MEN
        </NavLink>
        <NavLink to="/Kids" className="menu-link underline">
          KIDS
        </NavLink>
        <NavLink to="/Accessories" className="menu-link underline">
          ACCESSORIES
        </NavLink>
        <NavLink to="/Sale" className="menu-link underline">
          SALE
        </NavLink>
      </nav>

      <div>
        <Outlet />
      </div>
    </>
  );
};
