import { lazy, Suspense } from "react";
import {Routes, Route, Link, NavLink} from 'react-router-dom'
// import ModuleCss from "./components/ModuleCss/ModuleCss";
// import AxiosTest from "./components/Axios/AxiosTest";
// import Bank from "./components/Bank/Bank";
// import MouseOver from "./components/MouseOver/MouseOver";
// import Selection from "./components/Select/Selection";
// import Buttons from "./components/Button/Button";
// import Todo from "./components/Todos/Todo";
// import Count from "./components/Count/Count";
// import Calculator from "./components/Calculator/Calculator";

const MouseOver = lazy(() => import('./components/MouseOver/MouseOver'))
const Bank = lazy(() => import('./components/Bank/Bank'))
const Selection = lazy(() => import('./components/Select/Selection'))
const AxiosTest = lazy(() => import('./components/Axios/AxiosTest'))
const Buttons = lazy(() => import('./components/Button/Button'))
const ModuleCss = lazy(() => import('./components/ModuleCss/ModuleCss'))
const Todo = lazy(() => import('./components/Todos/Todo'))
const Count = lazy(() => import('./components/Count/Count'))
const Calculator = lazy(() => import('./components/Calculator/Calculator'))


function App() {
  return (
    <div className="min-h-[800px] w-full relative">
      <div className="p-4 bg-slate-400">
        <ul className="flex gap-3">
          <li>
            <NavLink to='/' className='nav-item'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/bank' className='nav-item'>Bank</NavLink>
          </li>
          <li>
            <NavLink to='/selection' className='nav-item'>Selection</NavLink>
          </li>
          <li>
            <NavLink to='/axios' className='nav-item'>Axios</NavLink>
          </li>
          <li>
            <NavLink to='/button' className='nav-item'>Button</NavLink>
          </li>
          <li>
            <NavLink to='/modulecss' className='nav-item'>ModuleCSS</NavLink>
          </li>
          <li>
            <NavLink to='/todo' className='nav-item'>Todo</NavLink>
          </li>
          <li>
            <NavLink to='/count' className='nav-item'>Count</NavLink>
          </li>
          <li>
            <NavLink to='/calculator' className='nav-item'>Calculator</NavLink>
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
      <Route path='/todo' element={<Todo />}/>
      <Route path='/count' element={<Count />}/>
      <Route path='/calculator' element={<Calculator />}/>
     </Routes>
    </div>
     </Suspense>
    </div>
  );
}

export default App;
