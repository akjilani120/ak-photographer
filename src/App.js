import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Login from './Pages/Login/Login';
import SignIn from './Pages/Login/SignIn/SignIn';
import NotFound from './Pages/NotFoundPage/NotFound';

function App() {
  
  return (
    
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/blogs' element={<Blogs></Blogs>}> </Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signin' element={<SignIn></SignIn>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
    </div>
  );
}

export default App;
