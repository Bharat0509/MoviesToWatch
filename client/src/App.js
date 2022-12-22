
import './App.css';
import Card from './component/Card';
import Navbar from './component/Navbar';
import Slider from './component/Slider';
import { useGlobalContex } from './component/Contex';
import Loading from './component/Loading';
import {Routes,Route} from 'react-router-dom'
import SingleMovieInfo from './component/SingleMovieInfo';
import WatchMovie from './WatchMovie/WatchMovie';


function App() {
  const {isLoading}=useGlobalContex();
  return (<>
    {
      isLoading?<><h1><Loading/></h1></> :<><Navbar />
      {/* <Slider />
      <Card/> */}
      <Routes>
        <Route path='/' element={<div className='home'><Slider/> <Card/> </div>}/>
        <Route path='/movies/info/:id' element={<SingleMovieInfo/>}/>
        <Route path='/movie/watch/:id' element={<WatchMovie/>}/>
      </Routes>

      </>
    }
   </>
  );
}

export default App;
