import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";
const Navbar = () => {
  const {user,  logOut} = useContext(AuthContext)
    
  const handleLogOut = () =>{
    logOut()
    .then(()=>{
      Swal.fire({
        title: "Login Done",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
    })
    .catch(error=>{
      console.log(error)
    })
  }
    
    const navOption = <>
       
       <li><NavLink to='/'>Home</NavLink></li>
      
       <li><NavLink to='/DASHBOARD'>DASHBOARD</NavLink></li>
       <li><NavLink to='/menu'>Our Menu</NavLink></li>
       <li><NavLink to='/order'>Our Shop</NavLink></li>
       {
        user ? 
        <>
          <button onClick={handleLogOut} className="btn btn-ghost">Log Out</button>
        </> 
        :
         <>
                <li><NavLink to='/login'>Login</NavLink></li>
         </>
       }
    </>
    return (
        <div>
           <div className="navbar bg-base-100 fixed bg-opacity-30 z-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navOption}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Delax Hotel</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navOption}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div> 
<ToastContainer />
        </div>
    );
};

export default Navbar;