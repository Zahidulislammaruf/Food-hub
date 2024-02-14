import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";


const useCart = () => {
    const axiosSecure = useAxios()
    const {user} = useContext(AuthContext)
    const {refetch ,data : cart = []} = useQuery({
        queryKey : ['cart'],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/cart?email=${user.email}`)
            return res.data
        }
    })
    return [cart, refetch]
};

export default useCart;