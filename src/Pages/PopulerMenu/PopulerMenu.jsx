import { useEffect, useState } from "react";
import SectionTitle from "../../Component/SectionTitle/SectionTitle";
import MenuItem from "../../Component/MenuItem/MenuItem";

const PopulerMenu = () => {
    const [menu,setMenu] = useState([])
    useEffect(()=>{
       fetch('menu.json')
       .then(res=>res.json())
       .then(data=>{
        const populerItems = data.filter(item=> item.category=== 'popular')
        setMenu(populerItems)
       })

    },[])
    return (
        <div>
            <div>
                <SectionTitle subHeading={'Check It Out'} heading={'FROM OUR MENU'} ></SectionTitle>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {
                menu.map(item=> <MenuItem key={item._id} item={item}></MenuItem>)
              }

            </div>
        </div>
    );
};

export default PopulerMenu;