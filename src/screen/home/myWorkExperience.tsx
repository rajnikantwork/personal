import React from 'react';
import images from '../../constants/Image';

const MyWorkExperience: React.FC = () => {

    return (
        <div data-scroll-section className="bg-secLight relative py-24">
            <div className="container">
                <div className='flex flex-col gap-4 items-center mb-16'>
                    <div className='flex items-center gap-3 text-acholor text-2xl uppercase font-medium'>
                        <img src={images.ANIARROW} alt="" className='w-7' /> Resume
                    </div>
                    <div className='text-black dark:text-white text-5xl font-bold font-CABIN tracking-wide'>My Work Experience</div>
                </div>

                <div className='flex gap-6 flex-wrap'>
                    <div className='w-[calc(50%-24px)] bg-[#f9faff] border border-blue-100 rounded'>
                        <div className='flex justify-between items-center p-6 bg-white rounded-t-sm'>
                            <div className='text-2xl font-medium'>Sr. Frontend and UI/UX expert</div>
                            <div className='text-lg text-gray-500'>2015 - 2024 (Present)</div>
                        </div>
                        <div className='flex p-14 gap-10'>
                            <div className='w-36 saturate-0'><img src={images.APPINIMG} alt="" /></div>
                            <div className='flex flex-col items-start gap-5 flex-1'>
                                <h3 className='text-2xl font-medium'>Appinventiv</h3>
                                <p>I&apos;m winner of the world&apos;s most prestigious web designthat has more-or-less normal awards in the fields.</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[calc(50%-24px)] bg-[#f9faff] border border-blue-100 rounded'>
                        <div className='flex justify-between items-center p-6 bg-white rounded-t-sm'>
                            <div className='text-2xl font-medium'>Sr.HTML Developer</div>
                            <div className='text-lg text-gray-500'>2013 - 2015</div>
                        </div>
                        <div className='flex p-14 gap-10'>
                            <div className='w-36 saturate-0'><img src={images.SYNPSIMG} alt="" /></div>
                            <div className='flex flex-col items-start gap-5 flex-1'>
                                <h3 className='text-2xl font-medium'>SynapseIndia</h3>
                                <p>I&apos;m winner of the world&apos;s most prestigious web designthat has more-or-less normal awards in the fields.</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[calc(50%-24px)] bg-[#f9faff] border border-blue-100 rounded'>
                        <div className='flex justify-between items-center p-6 bg-white rounded-t-sm'>
                            <div className='text-2xl font-medium'>Sr. Web Designer</div>
                            <div className='text-lg text-gray-500'>2011 - 2013</div>
                        </div>
                        <div className='flex p-14 gap-10'>
                            <div className='w-36 invert flex flex-col gap-6 items-center'><img src={images.VSIMGICO} alt="" className='w-9' /><img src={images.VSIMG} alt="" /></div>
                            <div className='flex flex-col items-start gap-5 flex-1'>
                                <h3 className='text-2xl font-medium'>Virtual Space Infotech</h3>
                                <p>I&apos;m winner of the world&apos;s most prestigious web designthat has more-or-less normal awards in the fields.</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[calc(50%-24px)] bg-[#f9faff] border border-blue-100 rounded'>
                        <div className='flex justify-between items-center p-6 bg-white rounded-t-sm'>
                            <div className='text-2xl font-medium'>Web Designer</div>
                            <div className='text-lg text-gray-500'>2011 - 2011</div>
                        </div>
                        <div className='flex p-14 gap-10'>
                            <div className='w-36 mix-blend-multiply'><img src={images.THECHOPIMG} alt="" /></div>
                            <div className='flex flex-col items-start gap-5 flex-1'>
                                <h3 className='text-2xl font-medium'>The Chopras Global</h3>
                                <p>I&apos;m winner of the world&apos;s most prestigious web designthat has more-or-less normal awards in the fields.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyWorkExperience;
