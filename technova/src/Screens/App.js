import React from 'react'
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Dashboardnav from '../Components/dashboardnav';
import Header from '../Components/header'
import Navbar from '../Components/navbar'
import Sidebar from '../Components/sidebar';
import LevelFour from './levelfour';
import LevelOne from './levelone';
import LevelThree from './levelthree';
import LevelTwo from './leveltwo';

const App = () => {
  return (
    <div className="Home">
     {/* <Navbar /> */}
      {/* <Header />  */}
      <Dashboardnav />
      {/* <div className="dashboard-row"> */}
      {/* <div><Sidebar /></div>  */}
      <Routes>
        <Route path="/" element={<LevelOne />} />
        <Route path="/level-one" element={<LevelOne />} />
        <Route path="/level-two" element={<LevelTwo />} />
        <Route path="/level-three" element={<LevelThree />} />
        <Route path="/level-four" element={<LevelFour />} />
        {/* <Route path="/level-five" element={<LevelFive />} /> */}
      </Routes>
      {/* </div> */}
    {/* <LevelOne /> */}
    {/* <LevelTwo /> */}
    {/* <LevelThree /> */}
    
     </div>
  );
};

export default App
// export default LevelOnea
// export default LevelTwo
// export default LevelThree
// export default LevelFour