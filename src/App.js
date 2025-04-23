import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './Navbar/Navbar';
import { Home } from './Home/Home';
import { Carrusel } from './Carrusel/Carrusel';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/carrusel' element={<Carrusel/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
