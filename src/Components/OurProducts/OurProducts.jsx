import { useState } from "react";
import useProducts from "../LoadedData/useProducts";
import OurProduct from "./OurProduct";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";



const OurProducts = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const products = useProducts();
    const Lubricants = products.filter((items) => items.type === 'Lubricant')
    const Brake = products.filter((items) => items.type === 'Brake')
    const Horn = products.filter((items) => items.type === 'Horn')
    const Tyre = products.filter((items) => items.type === 'Tyre')
    const Battery = products.filter((items) => items.type === 'Battery')



    return (
        <div>
            <div className='w-full h-96 bg-slate-500 relative '>
                <div className=''></div>
                <h1 className='absolute top-[50%] left-[50%] text-2xl'>Our Products</h1>
            </div>
            <div >
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="tabs tabs-boxed">
                        <Tab className="tab">Lubricants</Tab>
                        <Tab className="tab">Brake</Tab>
                        <Tab className="tab">Horn</Tab>
                        <Tab className="tab">Tyre</Tab>
                        <Tab className="tab">Battery</Tab>
                    </TabList>
                    <TabPanel className="grid grid-cols-3 max-w-7xl m-auto gap-10">
                        {
                            Lubricants.map(product => <OurProduct key={product.product_name} element={product}></OurProduct>)
                        }
                    </TabPanel>
                    <TabPanel className="grid grid-cols-3 max-w-7xl m-auto gap-10">
                        {
                            Brake.map(product => <OurProduct key={product.product_name} element={product}></OurProduct>)
                        }
                    </TabPanel>
                    <TabPanel className="grid grid-cols-3 max-w-7xl m-auto gap-10">
                        {
                            Horn.map(product => <OurProduct key={product.product_name} element={product}></OurProduct>)
                        }
                    </TabPanel>
                    <TabPanel className="grid grid-cols-3 max-w-7xl m-auto gap-10">
                        {
                            Tyre.map(product => <OurProduct key={product.product_name} element={product}></OurProduct>)
                        }
                    </TabPanel>
                    <TabPanel className="grid grid-cols-3 max-w-7xl m-auto gap-10">
                        {
                            Battery.map(product => <OurProduct key={product.product_name} element={product}></OurProduct>)
                        }
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OurProducts;



