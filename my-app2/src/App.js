import './App.css';

// import Main from './task1/main';
// import About from './task1/about';
// import Con from './task1/contact';
// import NoPage from './task1/noPage';
// import Icon from './task2/icon';
import Fruit from './task3/fruit';
import Car from './task3/car';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const fruits =
	{
		name: "Mango",
		color: "Yellow"
	}
  return (

    // task1&2
    // <BrowserRouter>
    //   <Routes>
    //     <Route index element={<Main />}/>
    //     <Route path='con' element={<Con />}/>
    //     <Route path='/about' element={<About />}/>
    //     <Route path="*" element={<NoPage />} />
    //     <Route path='/icon' element={<Icon />} />
    //   </Routes>
    // </BrowserRouter>
      <div>
        <Fruit fruits={fruits} />
        <hr></hr>
        <Car />
      </div>
    
  );
}

export default App;
