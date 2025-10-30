// src/features/Home/HomePage.tsx

import DefaultLayoutTemplate from '../../components/templates/DefaultLayoutTemplate';
import LandingSection  from './components/LandingSection';
// import { CountingSection } from './components/CountingSection';
// import { ScrollIntroduceSection } from './components/ScrollIntroduceSection';
// import { HorisonScrollSection } from './components/HorisonScrollSection';
// import { CardViewSection1 } from './components/CardViewSection1';
// import { CardViewSection2 } from './components/CardViewSection2';
// import { LastPageSection } from './components/LastPageSection';

const HomePage = () => {
  return (
    // 👈 Page 컴포넌트가 템플릿을 사용하여 자신을 감쌉니다.
    <DefaultLayoutTemplate>
      {/* HomePage만의 고유 콘텐츠 */}
      <LandingSection />
      <section className='counting'></section>
      <section className='scroll-introduce'></section>
      <section className='horison-scroll'></section>
      <section className='card-view1'></section>
      <section className='card-view2'></section>
      <section className='last-page'></section>
    </DefaultLayoutTemplate>
  );
};
export default HomePage;