// src/features/Home/HomePage.tsx

import DefaultLayoutTemplate from '../../components/templates/DefaultLayoutTemplate';
import LandingSection  from './components/LandingSection';
import CountingSection from './components/CountingSection';
// import { ScrollIntroduceSection } from './components/ScrollIntroduceSection';
import HorisonScrollSection from './components/HorisonScrollSection';
import CardViewSection from './components/CardViewSection';
import LastPageSection from './components/LastPageSection';

const HomePage = () => {
  return (
    // 👈 Page 컴포넌트가 템플릿을 사용하여 자신을 감쌉니다.
    <DefaultLayoutTemplate>
      {/* HomePage만의 고유 콘텐츠 */}
      <LandingSection />
      <CountingSection />
      <section className='scroll-introduce'></section>
      <HorisonScrollSection />
      <CardViewSection theme='blue' />
      <CardViewSection theme='red' />
      <LastPageSection />
    </DefaultLayoutTemplate>
  );
};
export default HomePage;