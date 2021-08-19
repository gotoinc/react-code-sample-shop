import './scss/index.scss';
import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Home />
        <Route path="/" component={Home} />
        
      </div>
    </div>
  );
}

export default App;
