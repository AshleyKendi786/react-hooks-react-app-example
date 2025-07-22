 import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main role="main">
        <Outlet />
      </main>
    </div>
  );
}

export default App;