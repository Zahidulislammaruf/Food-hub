
import SectionTitle from "../../Component/SectionTitle/SectionTitle";
import MenuItem from "../../Component/MenuItem/MenuItem";
import useMenu from "../../Hooks/useMenu";

const PopulerMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item=> item.category === 'popular')
    return (
        <div>
            <div>
                <SectionTitle subHeading={'Check It Out'} heading={'FROM OUR MENU'} ></SectionTitle>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {
                popular.map(item=> <MenuItem key={item._id} item={item}></MenuItem>)
              }

            </div>
        </div>
    );
};

export default PopulerMenu;