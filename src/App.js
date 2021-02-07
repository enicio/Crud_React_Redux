import './App.css';
import List from './Components/List';
import InputsList from './Components/InputsList';
import { BrowserRouter, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ InputsList } />
      <Route path="/list" component={ List } />
    </BrowserRouter>
  );
}

export default App;
