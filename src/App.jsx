import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Details from './pages/Details';
import Stats from './pages/Stats';
import Error from './components/Error';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import  eventosActions  from "./store/actions/eventosActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(eventosActions.get_eventos()); // Dispara la acción para obtener los eventos desde la API
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home rutaActual="home" imagen="./src/assets/img/1.jpg" altexto="People releasing floating lanterns into the night sky." titulo="HOME" />} />
        <Route path='/upcoming' element={<Home rutaActual="upcoming" imagen="./src/assets/img/2.jpg" altexto="Book fair with numerous stalls and visitors." titulo="UPCOMING EVENTS" />} />
        <Route path='/past' element={<Home rutaActual="past" imagen="./src/assets/img/3.jpg" altexto="Group of people running a marathon." titulo="PAST EVENTS" />} />
        <Route path='/contact' element={<Contact rutaActual="contact" imagen="./src/assets/img/4.jpg" altexto="Photo collage showing people at a food festival." titulo="CONTACT" />} />
        <Route path='/stats' element={<Stats rutaActual="stats" imagen="./src/assets/img/5.jpg" altexto="Panoramic photo of a concert in a large stadium and attendees holding colorful lights." titulo="STATS" />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
