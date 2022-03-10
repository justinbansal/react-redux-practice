import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Counter from './features/counter/Counter';
import ProductsList from './components/ProductsList';

function App() {
  return (
    <div className="App">
      <Header />
      <ProductsList />
    </div>
  );
}

export default App;
