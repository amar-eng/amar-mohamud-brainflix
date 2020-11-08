import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Comments from './components/Comments/Comments';
import VideoList from './components/Videolist/VideoList';
import MainVid from './components/mainvid/MainVid';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainVid />
      <Comments />
      <VideoList />
      
    </div>
  );
}

export default App;
