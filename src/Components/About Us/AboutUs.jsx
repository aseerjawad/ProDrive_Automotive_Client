import React, { useEffect, useState } from 'react';
import OurTeam from './OurTeam';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './aboutus.css'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import CountUp from 'react-countup';



const AboutUs = () => {
    const [team, setTeam] = useState([])
    const [tabIndex, setTabIndex] = useState(0);
    useEffect(() => {
        fetch('Our_Team.json')
            .then(res => res.json())
            .then(data => {
                setTeam(data)
            })
    }, [])
    return (
        <div className='my-10 space-y-24'>
            <div className='w-full h-96 bg-slate-500 relative '>
                {/* <div className=''></div> */}
                <h1 className='flex justify-center items-center text-2xl'>About us</h1>
            </div>
            <div className='grid grid-cols-2 max-w-7xl m-auto'>
                <div data-aos="fade-right"><h1 className='p-5 font-bold font-Roboto_slab text-4xl text-justify '>We bring <span className='text-green-600'>Chittagong</span> city-wide recognition for our commitment to excellence. Whether you're in need of routine maintenance or simply seeking expert advice, <span className='text-green-600'>ProDrive</span> is your one-stop destination.</h1></div>
                <div data-aos="fade-left"><h1 className='p-5 font-bold text-xl flex h-full text-justify items-center '>At the heart of our mission is a deep-seated love for automobiles and a relentless pursuit of perfection. Our state-of-the-art facilities boast the latest in automotive technology, ensuring that your vehicle receives the meticulous attention it deserves.</h1></div>
            </div>
            <div className='grid lg:grid-cols-4 gap-5 max-w-7xl m-auto'>
                <div className='w-72 h-40 bg-slate-100 flex flex-col justify-center items-center'>
                    <p className='font-siara font-bold text-6xl text-green-600'><CountUp end={5} duration={5} /></p>
                    <h1 className='font-Roboto_slab'>Years Experience</h1>
                </div>
                <div className='w-72 h-40 bg-slate-100 flex flex-col justify-center items-center'>
                    <p className='font-siara font-bold text-6xl text-green-600'><CountUp end={1005} duration={5} /></p>
                    <h1 className='font-Roboto_slab'>Happy Clients</h1>
                </div>
                <div className='w-72 h-40 bg-slate-100 flex flex-col justify-center items-center'>
                    <p className='font-siara font-bold text-6xl text-green-600'><CountUp end={2000} duration={5} />+</p>
                    <h1 className='font-Roboto_slab'>Product sold</h1>
                </div>
                <div className='w-72 h-40 bg-slate-100 flex flex-col justify-center items-center'>
                    <p className='font-siara font-bold text-6xl text-green-600'><CountUp end={4} duration={5} />.5</p>
                    <h1 className='font-Roboto_slab'>Overall Rating</h1>
                </div>

            </div>
            <div className='bg-lime-300 p-24'>
                <h1 className='text-center'>Our Team</h1>
                <div className='grid grid-cols-4'>
                    {
                        team.slice(0, 4).map(person => <OurTeam key={person.name} element={person}></OurTeam>)
                    }
                </div>
            </div>
            <div className='grid grid-cols-2 max-w-7xl m-auto bg-slate-100 h-[350px]'>
                <div data-aos="fade-right">
                    <img className='w-full h-[350px]' src="../../../public/1.jpg" alt="" />
                </div>
                <div className='p-10'>
                    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                        <TabList className="tabs font-siara font-bold tabs-boxed mb-10 max-w-[390px] m-auto">
                            <Tab className="tab bgm  text-base">Expertise</Tab>
                            <Tab className="tab bgm  text-base">Innovation</Tab>
                            <Tab className="tab bgm  text-base">Customer satisfaction</Tab>
                        </TabList >
                        <div data-aos="fade-left">
                            <TabPanel className='font-Roboto_slab'>We take pride in our team of highly skilled professionals. Through continuous learning and staying abreast of industry advancements, we ensure our expertise aligns with the evolving landscape of automotive technology.</TabPanel>
                            <TabPanel className='font-Roboto_slab'>Embracing innovation is a cornerstone of our approach. We invest in cutting-edge technology, sustainable practices, and continuous improvement to stay at the forefront of the automotive industry.</TabPanel>
                            <TabPanel className='font-Roboto_slab'>Our customers are at the center of everything we do. We prioritize your needs, concerns, and satisfaction, striving to exceed expectations in every interaction.</TabPanel>
                        </div>
                    </Tabs>
                </div>
            </div>
            <div className='grid grid-cols-2 bg-indigo-600 px-10'>
                <div className='py-40 text-4xl'>
                    <h1>Call us for further information. Rentaly customer care is here to help you anytime.</h1>
                </div>
                <div>
                    <h1 className='py-40 text-xl'>
                        CALL US NOW
                        1200 333 800</h1>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;