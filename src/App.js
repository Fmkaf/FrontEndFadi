import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/SignUp' element={<SignUp/>}></Route>
          <Route path='/Form' element={<Form/>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

