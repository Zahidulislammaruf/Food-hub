import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/Provider";
import Swal from "sweetalert2";


const SingIn = () => {
    const {register, reset, handleSubmit,formState: { errors },} = useForm()
    const {createUser,updateUser} = useContext(AuthContext)
    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result=>{
            console.log(result.user)
            updateUser(data.name, data.photoUrl)
            .then(()=>{
               console.log("Its Work Boy") 
               Swal.fire({
                title: "Profile Created",
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
            reset()
            
            .catch(error=>{
                console.log(error)
            })
            
        })
    }

    
    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
            
          </label>
          <input  type="Name" {...register("name",{ required: true })} placeholder="Name" className="input input-bordered"  />
          {errors.name && <span className="text-red-400">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
            
          </label>
          <input  type="text" {...register("photoUrl",{ required: true })} placeholder="photoUrL" className="input input-bordered"  />
          {errors.name && <span className="text-red-400">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("email")} placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" {...register("password",{
             required: true,
             minLength :5,
             maxLength: 10,
             pattern: /[A-Za-z]+$/ })} className="input input-bordered" required />
          {errors.password?.type === 'required' && <span className="text-red-400">Password Must Be required</span>}
          {errors.password?.type === 'minLength' &&<span className="text-red-400">Password Must Be 6 C required</span>}
          {errors.password?.type === 'maxLength' &&<span className="text-red-400">Password Must Less The 10 C required</span>}
          {errors.password?.type === 'pattern' &&<span className="text-red-400">Password have A Special Ch Or Number</span>}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type="submit" className="btn btn-primary" value={'Submit'}/>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingIn;