import './App.scss';
// import Navbar from './components/Navbar/Navbar';
// import VideoList from './components/Videolist/VideoList';
// import MainVid from './components/mainvid/MainVid';
// import MainContent from './components/MainContent/MainContent';
import {BrowserRouter, Switch, Route} from 'react-router-dom'; 
import Home from './pages/Home';
import Upload from './pages/Upload';


function App() {
  return (
   <BrowserRouter>
      {/* <Navbar/> */}
      <Switch>
        <Route path = "/" exact component = {Home} />
        <Route path = "/upload"  component = {Upload} />

      </Switch>
   </BrowserRouter>
  );
}

export default App;
