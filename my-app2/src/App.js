import './App.css';

import Main from './main';
import About from './about';
import Con from './contact';
import NoPage from './noPage';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />}/>
        <Route path='con' element={<Con />}/>
        <Route path='/about' element={<About />}/>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
