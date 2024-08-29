import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/home";
import AgeSelection from "./components/ageSelection";
import ProblemSelection1 from './components/problemsSection1';
import ProblemSelection2 from './components/problemSelection2';
import ProblemSelection3 from './components/problemSelection3';
import ProblemSelection4 from './components/problemSelection4';
import Navbar from './components/navbar';
import YoungSolutionOne from './components/YoungSolutionsOne';
import YoungSolutionTwo from './components/YoungSolutionsTwo';
import YoungSolutionThree from './components/YoungSolutionsThree';
import YoungSolutionFour from './components/YoungSolutionsFour';
import YoungSolutionFive from './components/YoungSolutionsFive';
import YoungSolutionSix from './components/YoungSolutionsSix';
import YoungSolutionSeven from './components/YoungSolutionsSeven';
import YoungSolutionEight from './components/YoungSolutionsEight';
import YoungSolutionNine from './components/YoungSolutionsNine';
import YoungSolutionTen from './components/YoungSolutionsTen';
import GrowingSolutionsOne from './components/GrowingSolutionsOne';
import GrowingSolutionsTwo from './components/GrowingSolutionsTwo';
import GrowingSolutionsThree from './components/growingSolutionsThree';
import GrowingSolutionsFour from './components/GrowingSolutionsFour';
import GrowingSolutionsFive from './components/growingSolutionsFive';
import GrowingSolutionsSix from './components/growingSolutionsSix';
import GrowingSolutionsSeven from './components/growingSolutionsSeven';
import GrowingSolutionsEight from './components/growingSolutionsEight';
import MiddleSolutionOne from './components/MiddleSolutionOne';
import MiddleSolutionTwo from './components/MiddleSolutionTwo';
import MiddleSolutionThree from './components/MiddleSolutionThree';
import MiddleSolutionFour from './components/MiddleSolutionFour';
import MiddleSolutionFive from './components/MiddleSolutionFive';
import MiddleSolutionSix from './components/MiddleSolutionSix';
import OldSolutionOne from './components/OldSolutionOne';
import OldSolutionTwo from './components/OldSolutionTwo';
import OldSolutionThree from './components/OldSolutionThree';
import OldSolutionFour from './components/OldSolutionFour';
import OldSolutionFive from './components/OldSolutionFive';
import OldSolutionSix from './components/OldSolutionSix';





function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/age-selection" element={<AgeSelection/>}/>
        <Route path="/problem-selection1" element={<ProblemSelection1/>}/>
        <Route path="/problem-selection2" element={<ProblemSelection2/>}/>
        <Route path="/problem-selection3" element={<ProblemSelection3/>}/>
        <Route path="/problem-selection4" element={<ProblemSelection4/>}/>
        <Route path="/YoungSolutionOne" element={<YoungSolutionOne/>}/>
        <Route path="/YoungSolutionTwo" element={<YoungSolutionTwo/>}/>
        <Route path="/YoungSolutionThree" element={<YoungSolutionThree/>}/>
        <Route path="/YoungSolutionFour" element={<YoungSolutionFour/>}/>
        <Route path="/YoungSolutionFive" element={<YoungSolutionFive/>}/>
        <Route path="/YoungSolutionSix" element={<YoungSolutionSix/>}/>
        <Route path="/YoungSolutionSeven" element={<YoungSolutionSeven/>}/>
        <Route path="/YoungSolutionEight" element={<YoungSolutionEight/>}/>
        <Route path="/YoungSolutionNine" element={<YoungSolutionNine/>}/>
        <Route path="/YoungSolutionTen" element={<YoungSolutionTen/>}/>
        <Route path="/GrowingSolutionsOne" element={<GrowingSolutionsOne/>}/>
        <Route path="/GrowingSolutionsTwo" element={<GrowingSolutionsTwo/>}/>
        <Route path="/GrowingSolutionsThree" element={<GrowingSolutionsThree/>}/>
        <Route path="/GrowingSolutionsFour" element={<GrowingSolutionsFour/>}/>
        <Route path="/GrowingSolutionsFive" element={<GrowingSolutionsFive/>}/>
        <Route path="/GrowingSolutionsSix" element={<GrowingSolutionsSix/>}/>
        <Route path="/GrowingSolutionsSeven" element={<GrowingSolutionsSeven/>}/>
        <Route path="/GrowingSolutionsEight" element={<GrowingSolutionsEight/>}/>
        <Route path="/MiddleSolutionOne" element={<MiddleSolutionOne/>}/>
        <Route path="/MiddleSolutionTwo" element={<MiddleSolutionTwo/>}/>
        <Route path="/MiddleSolutionThree" element={<MiddleSolutionThree/>}/>
        <Route path="/MiddleSolutionFour" element={<MiddleSolutionFour/>}/>
        <Route path="/MiddleSolutionFive" element={<MiddleSolutionFive/>}/>
        <Route path="/MiddleSolutionSix" element={<MiddleSolutionSix/>}/>
        <Route path="/OldSolutionOne" element={<OldSolutionOne/>}/>
        <Route path="/OldSolutionTwo" element={<OldSolutionTwo/>}/>
        <Route path="/OldSolutionThree" element={<OldSolutionThree/>}/>
        <Route path="/OldSolutionFour" element={<OldSolutionFour/>}/>
        <Route path="/OldSolutionFive" element={<OldSolutionFive/>}/>
        <Route path="/OldSolutionSix" element={<OldSolutionSix/>}/>
      </Routes>
    </>

  );
}

export default App;
