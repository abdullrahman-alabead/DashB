import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import Widgets from './Components/Widgets';
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="container-fluid position-relative w-100 d-flex p-0">
      <Sidebar />
      <div className='flex-grow-1 page-content'>
      <Header />
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/widgets' element={<Widgets />} />
        </Routes>
      </div>
      </div>
    </div>
  );
}

export default App;
