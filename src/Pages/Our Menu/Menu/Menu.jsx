import { Helmet } from 'react-helmet-async';
import SectionCover from '../../../Component/SectionCover/SectionCover';
import menubg from '../../../assets/menu/banner3.jpg'
import PopulerMenu from '../../PopulerMenu/PopulerMenu';
const Menu = () => {

    return (
        <div>
          <Helmet>
        <title>Delax | Menu</title>
      </Helmet>  
      <SectionCover img={menubg} title={"Our Menu"}></SectionCover>
      <PopulerMenu></PopulerMenu>
      <SectionCover img={menubg} title={"Our Menu"}></SectionCover>
      <PopulerMenu></PopulerMenu>
      <SectionCover img={menubg} title={"Our Menu"}></SectionCover>
      <PopulerMenu></PopulerMenu>
      <SectionCover img={menubg} title={"Our Menu"}></SectionCover>
      <PopulerMenu></PopulerMenu>
        </div>
    );
};

export default Menu;