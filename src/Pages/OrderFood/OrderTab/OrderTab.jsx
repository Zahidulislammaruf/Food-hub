import FoodCard from "../../../Component/FoodCard/FoodCard";

const OrderTab = ({item}) => {
    return (
        <div>
           <div className='grid md:grid-cols-3 gap-3'>
    {
        item.map(item=> <FoodCard key={item._id} item={item}></FoodCard>)
    }
    </div> 
        </div>
    );
};

export default OrderTab;