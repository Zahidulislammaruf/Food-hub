import { useState } from 'react';
import SectionCover from '../../../Component/SectionCover/SectionCover';
import OrderImg from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';
import FoodCard from '../../../Component/FoodCard/FoodCard';
import OrderTab from '../OrderTab/OrderTab';
const Order = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [menu] = useMenu()
    const dessert = menu.filter(item=> item.category === 'dessert')
    const pizza = menu.filter(item=> item.category === 'pizza')
    const salad = menu.filter(item=> item.category === 'salad')
    const soup = menu.filter(item=> item.category === 'soup')
    const drinks = menu.filter(item=> item.category === 'drinks')
    return (
        <div>
           <SectionCover img={OrderImg}title={"Order Food"}></SectionCover> 
           <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>Salad</Tab>
    <Tab>Pizza</Tab>
    <Tab>Soup</Tab>
    <Tab>Dessert</Tab>
    <Tab>Drinks</Tab>
    
  </TabList>
  
  <TabPanel>
  <OrderTab item={salad}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab item={pizza}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab item={soup}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab item={dessert}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab item={drinks}></OrderTab>
  </TabPanel>
</Tabs>
        </div>
    );
};

export default Order;