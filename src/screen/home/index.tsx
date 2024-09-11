import React from 'react';
import ScrollContainer from '../../shared-component/scrollContainer';
import HomeBanner from './homeBanner';
import SatisfiedClients from './satisfiedClients';
import SoftSkills from './softSkills';
import HomeServices from './homeServices';
import MyWorkExperience from './myWorkExperience';

const Home: React.FC = () => {
  return (
    <ScrollContainer>
      <HomeBanner />
      <SatisfiedClients />
      <SoftSkills />
      <HomeServices />
      <MyWorkExperience />
      <div className='text-center text-black text-4xl'>Rajnikant</div>
    </ScrollContainer>
  );
};

export default Home;
