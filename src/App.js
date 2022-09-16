import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";

import { Element } from "react-scroll";
import Service from "./pages/Service";
import Project from "./pages/Project";
import Bg from "./pages/Bg";
import Contact from "./pages/Contact";
function App() {
  return (
    <>
    <Element name={"Home"} id="home">
       <Navbar />
       <Home />
       </Element>
       <Aboutus />
       <Service />
       <Bg />
      <Project />
      <Contact />
    </>

  
  );
}

export default App;
