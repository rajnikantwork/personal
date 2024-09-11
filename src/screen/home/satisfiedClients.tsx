import React from 'react';
import projectStatistics from '../../localData/projectStatistics'

const SatisfiedClients: React.FC = () => {

    return (
        <div data-scroll-section className="bg-lgGrayBG relative py-24">
            <div className="container">
                <div className='flex gap-24'>
                    {projectStatistics.map((statistic) => (
                        <div key={statistic.id} className="w-[30%] flex flex-col items-center">
                            <div className="font-CABIN font-bold text-[80px] leading-none text-transparent" style={{ WebkitTextStroke: '1px #5776ff'}}>{statistic.value}k <sup className='font-IBM font-medium text-6xl -ml-5'>+</sup></div>
                            <div className="font-CABIN font-medium text-2xl mt-5 mb-3">{statistic.title}</div>
                            <p className="text-center text-lg text-gray-500 dark:text-gray-400">{statistic.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SatisfiedClients;
