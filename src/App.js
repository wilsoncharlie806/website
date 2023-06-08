import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Skill from './Components/Skill/Skill'
import Contact from './Components/Contact/Contact'
import Projects from './Components/Projects/Projects'
import Footer from './Components/Footer/Footer'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
           <Routes>
                 <Route exact path='/' element={<>< About/><Footer/></>}></Route>
                 <Route exact path='/skill' element={<><Skill/><Footer/></>}></Route>
                 <Route exact path='/contact' element={<>< Contact /></>}></Route>
                 <Route exact path='/projects' element={<>< Projects /></>}></Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;