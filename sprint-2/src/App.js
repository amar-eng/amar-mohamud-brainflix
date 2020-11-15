import './App.scss';
// import Navbar from './components/Navbar/Navbar';
// import VideoList from './components/Videolist/VideoList';
// import MainVid from './components/mainvid/MainVid';
// import MainContent from './components/MainContent/MainContent';
import {BrowserRouter, Switch, Route} from 'react-router-dom'; 
// import Home from './pages/Home';
// import Main from './Components/main/Main';
import Upload from './pages/Upload';
import Home from './pages/Home';

// import Videos from './Components/video/Videos'
// import VideoDetails from './Components/video/VideoDetails'


function App() {
  return (
   <BrowserRouter>
      {/* <Navbar/> */}
      <Switch>
        <Route path = "/" exact component = {Home} />
        <Route path = "/videos/:id" component ={Home} /> 
        <Route path = "/upload"  component = {Upload} />
        
      </Switch>
   </BrowserRouter>
  );
}

export default App;
