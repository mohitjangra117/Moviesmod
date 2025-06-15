import "./App.css";
import Navbar from "./Navbar";
import Movies from "./Movies";
import Nav2 from "./Nav2";
function App(){
  return(
    <div className="page w-full h-full bg-[#18181B] ">
    <div className="main">
  <Navbar/>
  <Nav2/>
  <Movies/>
    </div>
    </div>
  )
}


export default App;