import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Create from './components/Create';
import Error from './components/Error';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Note from './components/Note';


function App() {
  return (
    <div className="main">
      <Router>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route exact path='/' element={<Main />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/create' element={<Create />} />
            <Route exact path='/note/' element={<Note />} />
            <Route exact path='/note/:noteURL' element={<Note />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div >
  );
}

export default App;
