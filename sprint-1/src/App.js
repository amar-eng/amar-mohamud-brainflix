import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Comments from './components/Comments/Comments';
import VideoList from './components/videolist/VideoList';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Comments />
      <VideoList />
    </div>
  );
}

export default App;
