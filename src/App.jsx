

import { Route, Routes } from 'react-router-dom';
import SiteNav from './SiteNav';
import HomePage from './Homepage';


function App() {
  return (
    <div className='w-screen h-screen '>
     <SiteNav/>
     <HomePage/>
  
    </div>
  );
}

export default App;