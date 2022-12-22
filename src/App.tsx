import { lazy, Suspense } from "react";
import {Routes, Route, Link} from 'react-router-dom'
// import ModuleCss from "./components/ModuleCss/ModuleCss";
// import AxiosTest from "./components/Axios/AxiosTest";
// import Bank from "./components/Bank/Bank";
// import MouseOver from "./components/MouseOver/MouseOver";
// import Selection from "./components/Select/Selection";
// import Buttons from "./components/Button/Button";

const MouseOver = lazy(() => import('./components/MouseOver/MouseOver'))
const Bank = lazy(() => import('./components/Bank/Bank'))
const Selection = lazy(() => import('./components/Select/Selection'))
const AxiosTest = lazy(() => import('./components/Axios/AxiosTest'))
const Buttons = lazy(() => import('./components/Button/Button'))
const ModuleCss = lazy(() => import('./components/ModuleCss/ModuleCss'))

function App() {
  return (
    <div className="min-h-[800px] w-full relative">
      <div className="p-4 bg-slate-400">
        <ul className="flex gap-3">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/bank'>Bank</Link>
          </li>
          <li>
            <Link to='/selection'>Selection</Link>
          </li>
          <li>
            <Link to='/axios'>Axios</Link>
          </li>
          <li>
            <Link to='/button'>Button</Link>
          </li>
          <li>
            <Link to='/modulecss'>ModuleCSS</Link>
          </li>
          
        </ul>
      </div>
      
      <Suspense fallback={<div>Loading...</div>}>
    <div className="w-[500px] mx-auto border-2 border-gray-100 shadow-xl h-[500px] text-center mt-[100px]">
     <Routes>
     <Route path="/" element={<MouseOver />}/>
      <Route path="/bank" element={<Bank />}/>
      <Route path='/selection' element={<Selection />}/>
      <Route path='/axios' element={<AxiosTest />}/>
      <Route path='/button' element={<Buttons />}/>
      <Route path='/modulecss' element={<ModuleCss value="true"/>}/>
     </Routes>
    </div>
     </Suspense>
    </div>
  );
}

export default App;
