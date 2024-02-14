import { useContext } from "react";
import { MdBookmarks, MdCalendarMonth, MdHome, MdMenu, MdMenuBook, MdRateReview, MdShoppingCart } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../Provider/Provider";

const DashBoard = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="flex">
           <div className=" w-64 min-h-full bg-orange-400">
             <ul className="menu gap-y-2">
   <li><NavLink to='/dashboard/userHome'><MdHome></MdHome> | Profile </NavLink></li>

   <li><NavLink to='/dashboard/cart'><MdShoppingCart></MdShoppingCart> My Cart</NavLink></li>
   <li><NavLink to='/dashboard/reservation'><MdCalendarMonth></MdCalendarMonth> Reservation</NavLink></li>
   <li><NavLink to='/dashboard/review'><MdRateReview></MdRateReview> Review</NavLink></li>
   <li><NavLink to='/dashboard/booking'><MdBookmarks></MdBookmarks> My Booking</NavLink></li>
   <div className="divider divider-neutral"></div>
   <li><NavLink to='/'><MdHome></MdHome> Home </NavLink></li>
   <li><NavLink to='/menu'><MdMenu></MdMenu> Menu </NavLink></li>
   <li><NavLink to='/Order'><MdMenuBook></MdMenuBook> Order </NavLink></li>
           
           
             </ul>
           
           </div> 
           
           <div className="flex-1 p-6">
            <Outlet></Outlet>
           </div>
        </div>
    );
};

export default DashBoard;