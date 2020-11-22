import './App.scss';
import Navbar from './Components/navbar/Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom'; 
import Upload from './pages/Upload';
import Home from './pages/Home';




function App() {
  return (
   <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path = "/" exact component = {Home} />
        <Route path = "/videos/:id" component ={Home} /> 
        <Route path = "/upload"  component = {Upload} />
        
      </Switch>
   </BrowserRouter>
  );
}

export default App;
