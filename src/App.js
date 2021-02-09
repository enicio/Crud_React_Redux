import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import List from './Components/List';
import InputsList from './Components/InputsList';
import Header from './Components/Header'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/inpustlist" component={ InputsList } />
      <Route exact path="/" component={ List } />
    </BrowserRouter>
  );
}

export default App;
