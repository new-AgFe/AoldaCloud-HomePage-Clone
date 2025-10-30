import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './features/Home/HomePage'; // Page 컴포넌트
//import ProjectListPage from './features/Project/ProjectListPage';
import './App.css'


const App = () => {
  return (
    // 1. 라우팅 환경을 제공하는 BrowserRouter
    <BrowserRouter>
      {/* 2. 모든 경로(Route)들을 감싸는 Routes */}
      <Routes>
        {/* 3. 경로와 페이지 컴포넌트 매핑 */}
        <Route path="/" element={<HomePage />} /> {/* HomePage가 템플릿을 사용함 */}
        {/* <Route path="/projects" element={<ProjectListPage />} /> */}
        {/* 필요한 다른 경로들 추가... */}
      </Routes>
    </BrowserRouter>
  );
};

export default App
