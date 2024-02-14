import { useState } from 'react';
import SectionCover from '../../../Component/SectionCover/SectionCover';
import OrderImg from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';

import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Order = () => {
    const categories = ['salad','pizza','soup','desserts','drinks']
    const {category} = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu()
    


    const dessert = menu.filter(item=> item.category === 'dessert')
    const pizza = menu.filter(item=> item.category === 'pizza')
    const salad = menu.filter(item=> item.category === 'salad')
    const soup = menu.filter(item=> item.category === 'soup')
    const drinks = menu.filter(item=> item.category === 'drinks')
    return (
        <div>
          <Helmet>
        <title>Delax | Shop</title>
      </Helmet>  
           <SectionCover img={OrderImg}title={"Order Food"}></SectionCover> 
           <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>salad</Tab>
    <Tab>pizza</Tab>
    <Tab>soup</Tab>
    <Tab>dessert</Tab>
    <Tab>drinks</Tab>
    
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