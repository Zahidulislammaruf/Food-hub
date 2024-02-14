import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";

const Main = () => {
    const location = useLocation()

    const noHeadFoot = location.pathname.includes('login') || location.pathname.includes('singin')
    return (
        <div>
        { noHeadFoot || <Navbar></Navbar>}
           <Outlet></Outlet> 
          {noHeadFoot ||  <Footer></Footer>}
        </div>
    );
};

export default Main;