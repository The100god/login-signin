
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CreateAccount from './components/createAccount/CreateAccount';
import Login from './components/login/Login';
import Signin from './components/signin/Signin';
import Settings from './components/accSetting/Settings';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CreateAccount/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/setting' element={<Settings/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
