import { BrowserRouter, Link, Route, Switch,Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Main from './pages/MainPage/Main';
import Sub1 from './pages/SubPage/Sub-intro';
import Sub2 from './pages/SubPage/Sub-intro2';
import Sub2_1 from './pages/SubPage/Sub-intro2_1';
import Sub2_2 from './pages/SubPage/Sub-intro2_2';
import SubRental from './pages/SubPage/Sub_rental';
import Sub3 from './pages/SubPage/Sub-intro-3'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
      </div>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/Sub1" element={<Sub1 />} />
        <Route path="/Sub2" element={<Sub2 />} />
        <Route path="/Sub3" element={<Sub3 />} />
        <Route path="/SubRental" element={<SubRental />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;