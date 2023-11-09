import { useLocation, useNavigate } from 'react-router-dom';
import './style.css';

function Carrusel({ imagen, titulo, alt }) {
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location)

  const redirigeaNext = () => {
    if (location.pathname === '/') {
      navigate('/upcoming');
    } else if (location.pathname === '/upcoming') {
      navigate('/past');
    } else if (location.pathname === '/past') {
      navigate('/contact');
    } else if (location.pathname === '/contact') {
      navigate('/stats');
    } else if (location.pathname === '/stats') {
      navigate('/');
    }
  };

  const redirigeaPrevius = () => {
    if (location.pathname === '/') {
      navigate('/stats');
    } else if (location.pathname === '/upcoming') {
      navigate('/');
    } else if (location.pathname === '/past') {
      navigate('/upcoming');
    } else if (location.pathname === '/contact') {
      navigate('/past');
    } else if (location.pathname === '/stats') {
      navigate('/contact');
    }
  };

  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade custom-carousel">
      <div className="carousel-inner">
        <img src={imagen} className="d-block w-100 carousel-image" alt={alt} />
        <div className="carousel-caption">
          <h2 className="text-3d"><strong>{titulo}</strong></h2>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" onClick={redirigeaPrevius} name="Previous">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next" type="button" onClick={redirigeaNext} name="Next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>

    </div>
  );
}

export default Carrusel;
