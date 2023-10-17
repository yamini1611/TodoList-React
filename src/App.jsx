import './App.css';
import Navs from './Components/Navbar';
import { BrowserRouter ,Routes ,Route } from 'react-router-dom'
import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Homepage';
import ToDo from './Components/ToDo';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navs />
     
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Register' element={<Register />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/ToDo' element={<ToDo />}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
