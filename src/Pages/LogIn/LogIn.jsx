import { useContext,  } from 'react';
import { AuthContext } from '../../Provider/Provider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';



const LogIn = () => {
    
    const {loginUser} = useContext(AuthContext)

    const navigate = useNavigate() 
    const location = useLocation()

    const from = location.state?.from?.pathname || "/"
    

    

    const handleLogin = e =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)

        loginUser(email,password)
        .then(result=>{
            console.log(result.user)
            


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
navigate(from,{replace:true})
        })
        .catch(error=>{
            console.error(error)
        })
    }
   

   


    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card md:w-2/3 lg:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        

        
        
        <div  className="form-control mt-6">
          <input  className="btn w-2/5 mx-auto btn-primary" type="submit" value='login'></input>
        </div>
      </form>
      <h2><Link to='/singin'>new Here</Link></h2>
    </div>
  </div>
</div> 
        </div>
    );
};

export default LogIn;