import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../../components/ui/carousel";
import images from '../../constants/Image';
import frontEndSkillsList from '../../localData/frontEndSkillsList'
import SoftSkillsCard from '../../shared-component/skillsCard';

const SoftSkills: React.FC = () => {
    const [progress] = React.useState(frontEndSkillsList.map(skill => parseInt(skill.rate)));

    return (
        <div data-scroll-section className="bg-secLight relative py-24">
            <div className="container">
                <div className='flex flex-col gap-4 items-center mb-16'>
                    <div className='flex items-center gap-3 text-acholor text-2xl uppercase font-medium'>
                        <img src={images.ANIARROW} alt="" className='w-7' /> About Me
                    </div>
                    <div className='text-black dark:text-white text-5xl font-bold font-CABIN tracking-wide'>My Soft Skills</div>
                    <p className='text-center text-gray-500 dark:text-gray-400 text-xl leading-relaxed mt-5 max-w-full w-4/5'>
                        Hello, I&apos;m Rajnikant!, I&apos;m a passionate web front-end developer with a strong foundation in both design and development. With a diverse background in art direction and design leadership, I&apos;ve been honored with the world&apos;s most prestigious web design awards for my work in UI, UX, and innovation. My technical expertise includes HTML, CSS, JavaScript, ReactJS, AngularJS, NodeJS, and TypeScript. I am also skilled in testing and deployment, ensuring that the projects I deliver are not only visually compelling but also robust, scalable, and efficient. My goal is to build seamless, user-friendly web applications that bring ideas to life.
                    </p>
                </div>
                <Carousel opts={{ align: "start" }} className="w-full max-w-full">
                    <div className='absolute right-12 -top-8'>
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                    <CarouselContent>
                        {frontEndSkillsList.map((item, index) => (
                            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/4">
                                <SoftSkillsCard
                                    icon={item.icon}
                                    title={item.title}
                                    progress={progress[index]}
                                    description={item.description}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    );
};

export default SoftSkills;
