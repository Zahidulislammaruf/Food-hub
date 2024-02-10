
const MenuItem = ({item}) => {
    const {name,recipe,image,category,price,_id} = item
    return (
        <div className="flex gap-6 mb-12">
          <img style={{borderRadius : '0px 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
          <div>
          <h2 className="upperase">{name}-------</h2> 
          <p>{recipe}</p> 
          </div>
          <p className="text-yellow-500">
            ${price}
          </p>

        </div>
    );
};

export default MenuItem;