import { MdRemoveCircle } from "react-icons/md";
import useCart from "../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxios from "../../Hooks/useAxios";

const Cart = () => {
    const [cart,refetch] = useCart()
    const totalPrice = cart.reduce((total, item)=> total + item.price,0)
    const axiosSecure = useAxios()
    const handleDelete = id =>{
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
             axiosSecure.delete(`/cart/${id}`)
             .then(res=>{
                console.log(res.data)
                if(res.data.deletedCount > 0){
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                    }
             })
             
             
                
            }
          });
    }
    return (
        <div>
            <div className="flex justify-evenly bg-black items-center p-2 text-white">
                <h2>Total Order : {cart.length}</h2>
                <h2>Total Price : ${totalPrice}</h2>
                <h2 className="text-white  ">Pay</h2>
            </div>
            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            #
          </label>
        </th>
        <th>Name</th>
        <th>Price</th>
        <th>Favorite Color</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        cart.map(item=> <tr key={item._id}>
            <th>
              <label>
                
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{item.name}</div>
                  <div className="text-sm opacity-50"></div>
                </div>
              </div>
            </td>
            <td>
              <br/>
              <span className="badge badge-ghost badge-sm">${item.price}</span>
            </td>
            <td>Purple</td>
            <th>
              <button 
              onClick={()=> handleDelete(item._id)}
              className="btn btn-ghost btn-xs"><MdRemoveCircle></MdRemoveCircle></button>
            </th>
          </tr>)
            
                       
      }
      
     
    </tbody>
   
    
  </table>
</div>
            </div>
        </div>
    );
};

export default Cart;