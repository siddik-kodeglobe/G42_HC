import logo from './logo.svg';
import './App.css';
import AllRoutes from './Routes/AllRoutes';
import Menu from './component/Menu/Menu';
import TopScroll from './component/TopScroll/TopScroll';

function App() {
  return (
    <div>
      <Menu/>
      <TopScroll/>
      <AllRoutes/>
    </div>
  );
}

export default App;
