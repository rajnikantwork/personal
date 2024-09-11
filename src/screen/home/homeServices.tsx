import React from 'react';
import images from '../../constants/Image';
import SingleAnchor from '../../shared-component/anchor/single-anchor';
import ServiceCard from "../../shared-component/serviceCard"; 
import services from "../../localData/servicesList"; 

const HomeServices: React.FC = () => {

    return (
        <div data-scroll-section className="bg-lgGrayBG relative py-24">
            <div className="container">
                <div className='flex flex-col gap-4 items-center mb-16'>
                    <div className='flex items-center gap-3 text-acholor text-2xl uppercase font-medium'>
                        <img src={images.ANIARROW} alt="" className='w-7' /> My Services
                    </div>
                    <div className='text-black dark:text-white text-5xl font-bold font-CABIN tracking-wide'>I&apos;m Specialized In</div>
                </div>
                <div className="flex gap-6 mb-16 font-IBM">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.id}
                            id={service.id}
                            title={service.title}
                            imageSrc={service.imageSrc}
                            description={service.description}
                        />
                    ))}
                </div>
                <div className='flex flex-col items-center'>
                    <div className='max-w-screen-md w-full m-auto text-center text-xl text-gray-500 dark:text-gray-400 mb-14'>Development your website, a comprehensive guide to designing a website that converts visitors into customers with <span className='text-acholor'>Rajnikant</span>.</div>
                    <SingleAnchor urlPath={"/service"} text={"View All Services"} type={false} />
                </div>
            </div>
        </div>
    );
};

export default HomeServices;
