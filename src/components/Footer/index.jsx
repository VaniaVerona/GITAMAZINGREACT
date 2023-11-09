import './style.css'


function Footer() {

  return (
    <>
      <footer className="footer ">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img src="../src/assets/img/facebook.png" alt="facebook" className="me-2" style={{ width: 30 }} />
            <img src="../src/assets/img/instagram.png" alt="instagram" className="me-2" style={{ width: 30 }} />
            <img src="../src/assets/img/whatsapp.png" alt="whatsapp" style={{ width: 30 }} />
          </div>
          <span className="ms-2 text-white "><strong>COHORT</strong></span>
        </div>
      </footer>
    </>
  )
}

export default Footer