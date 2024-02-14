import { Link } from "react-router-dom";
import MenuItem from "../../../Component/MenuItem/MenuItem";
import SectionCover from "../../../Component/SectionCover/SectionCover";

const MenuCategory = ({items,title,menubg}) => {
    return (
        <div className="pt-8">
                  {title && <SectionCover img={menubg} title={title}></SectionCover>}

          <div className="grid md:grid-cols-2 gap-4 my-16">
              {
                items.map(item=> <MenuItem key={item._id} item={item}></MenuItem>)
              }

            </div>
            <Link to={`/order/${title}`}><button className="btn btn-outline bg-slate-400 border-0 border-b-4  mb-6 ml-[50%]">Order now</button>
</Link>  
        </div>
    );
};

export default MenuCategory;