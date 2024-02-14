import { Helmet } from 'react-helmet-async';
import SectionCover from '../../../Component/SectionCover/SectionCover';
import menubg from '../../../assets/menu/banner3.jpg'
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import desserImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'

const Menu = () => {

    const [menu] =useMenu();
    const dessert = menu.filter(item=> item.category === 'dessert')
    const pizza = menu.filter(item=> item.category === 'pizza')
    const salad = menu.filter(item=> item.category === 'salad')
    const soup = menu.filter(item=> item.category === 'soup')
    const offered = menu.filter(item=> item.category === 'offered')
    return (
        <div>
          <Helmet>
        <title>Delax | Menu</title>
      </Helmet>  
      <SectionCover img={menubg} title="Our Menu"></SectionCover>
      <SectionTitle subHeading={'Dont Miss'} heading={'Today Offer'}></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>

      <MenuCategory 
          items={dessert}
          title="dessert"
          menubg={desserImg}
          
          ></MenuCategory>
      <MenuCategory 
          items={pizza}
          title="pizza"
          menubg={pizzaImg}
          
          ></MenuCategory>
      <MenuCategory 
          items={soup}
          title="soup"
          menubg={soupImg}
          
          ></MenuCategory>
      <MenuCategory 
          items={salad}
          title="salad"
          menubg={saladImg}
          
          ></MenuCategory>
       
       
        </div>
    );
};

export default Menu;