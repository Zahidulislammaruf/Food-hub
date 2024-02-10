import MenuItem from "../../../Component/MenuItem/MenuItem";
import SectionCover from "../../../Component/SectionCover/SectionCover";

const MenuCategory = ({items,title,menubg}) => {
    return (
        <div className="pt-8">
                  {title && <SectionCover img={menubg} title={title}></SectionCover>}

          <div className="grid md:grid-cols-2 gap-4 mt-16">
              {
                items.map(item=> <MenuItem key={item._id} item={item}></MenuItem>)
              }

            </div>  
        </div>
    );
};

export default MenuCategory;