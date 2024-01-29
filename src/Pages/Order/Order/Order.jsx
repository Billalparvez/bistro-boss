import { Helmet } from "react-helmet-async";
import orderImg from "../../../assets/shop/banner2.jpg"
import Cover from "../../Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../hooks/useMenu";
import { useState } from "react";

import TabCard from "../TabCard/TabCard";
import { useParams } from "react-router";
const Order = () => {
    const categories=['dessert','salad','pizza','soups','dinking']
    const {category}=useParams()
    const initialIndex=categories.indexOf(category)
    const [menu] = useMenu()
    const [tabIndex, setTabIndex] = useState(initialIndex)
    // console.log(menu)
    const desserts = menu.filter(menu => menu.category === "dessert")
    const soups = menu.filter(menu => menu.category === "soup")
    const dinkings = menu.filter(menu => menu.category === "dinking")
    const pizzas = menu.filter(menu => menu.category === "pizza")
    const salads = menu.filter(menu => menu.category === "salad")
    return (
        <div>
            <section className="mb-20">
                <Helmet>
                    <title> Bistor Boss |  Order </title>
                </Helmet>
                <Cover img={orderImg} title="Our Shop" des="Would you like to try a dish?"></Cover>
            </section>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Desserts</Tab>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Dinking</Tab>
                </TabList>
                <TabPanel>
                    <TabCard item={desserts}></TabCard>
                </TabPanel>

                <TabPanel>
                <TabCard item={soups}></TabCard>
                </TabPanel>

                <TabPanel>
                <TabCard item={salads}></TabCard>
                </TabPanel>

                <TabPanel>
                <TabCard item={dinkings}></TabCard>
                </TabPanel>
                
                <TabPanel>
                <TabCard item={pizzas}></TabCard>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;