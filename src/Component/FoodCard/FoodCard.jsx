import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";

import Swal from "sweetalert2";
import useAxios from "../../Hooks/useAxios";
import useCart from "../../Hooks/useCart";

const FoodCard = ({item}) => {
  const {user} = useContext(AuthContext);
    const {name,recipe,image,category,price,_id} = item
    const axiosSecure = useAxios()
    const [, refetch] = useCart()
    const handleAddtoCart = food => {
      if(user && user.email){
        
         const cartItem = {
          menuId : _id,
          email : user.email,
          name,
          price,
          image
         }
         axiosSecure.post('/cart',cartItem)
         .then(res=>{
           console.log(res.data)
           if(res.data.insertedId){
            Swal.fire({
              title: `${name} Added to Cart`,
              icon: "success",
              showConfirmButton: false,
              timer: 1500
            });
            refetch()
           }
 
         })
      }
      else {
        alert("Please Loggin First")
      }
    }
    return (
        <div className="card bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt={name} className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <div className="badge badge-secondary">${price} Only</div>
    <p>{recipe}</p>
    <div className="card-actions">
      <button onClick={()=> handleAddtoCart(item)} className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;