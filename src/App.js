import Topbar from './components/topbar/Topbar';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/pages/home/Home';

function App() {
  return (
    <div className='appContainer'>
      <div className='app'>
        <Topbar />
        <div className='sidebarContainer'>
          <Sidebar />
          <Home />
        </div>
      </div>
    </div>
  );
}
export default App;
