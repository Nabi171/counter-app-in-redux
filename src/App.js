import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Counter from './components/Counter/Counter';
function App() {
  return (
    <div className="container">
      <Header></Header>
      <Counter></Counter>
    </div>
  );
}

export default App;
