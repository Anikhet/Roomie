import './App.css';


import { Route, Routes } from 'react-router-dom';
import SiteNav from './SiteNav';
import HomePage from './Homepage';


function App() {
  return (
    <div className='w-screen h-screen'>
     <SiteNav/>
      {/* <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/" exact={true} element={<HomePage />} />
        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} /> */}
      
  
    </div>
  );
}

export default App;