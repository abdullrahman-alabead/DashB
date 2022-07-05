import './App.scss';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <div className="container-fluid position-relative d-flex p-0">
      <Sidebar />
      <Header />
      </div>
    </div>
  );
}

export default App;
