import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Counter from './components/Counter/Counter';
import { Provider } from 'react-redux';
import store from './components/Redux/store';
function App() {
  return (
    <div className="container">
      <Header></Header>
      <Provider store={store}>

        <Counter></Counter>
      </Provider>


    </div>
  );
}

export default App;
