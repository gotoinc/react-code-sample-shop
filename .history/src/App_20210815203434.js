import './scss/index.scss';
import { Header } from './components';
import { Home } from './pages';
function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
