import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <video className='videoTag main-video' autoPlay loop muted>
        <source src="/assets/video/chart.mp4" type='video/mp4' />
      </video>

      <nav class="navbar navbar-light bg-white-transparent">
        <div class="container-fluid">
          <a class="navbar-brand text-white logo-text" href="#">
            <img src="/assets/img/LOGO.png" alt="" width="60" height="50" class="d-inline-block" />
            Dream Achievers
          </a>
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <a class="nav-link active" href="">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">About Us</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className='container'>
        <div className='height-100'>
          <h1 className='text-center text-white display-2 fw-bold heading-home-text animate__animated animate__backInDown'>Invest for Future</h1>
          <h4 className='text-center text-white animate__animated animate__delay-1s animate__backInUp animate__slow'>in Stable Platform and Make Fast Money</h4>
        </div>
        <div className='row'>
          <div className='col-lg-10 offset-lg-1'>
            <div className='card home-card-transparent'>
              <div className='card-body'>
                <div className='background-shadow'></div>
                <div className='cristalls'></div>
                <p className='text-white'>Invest in an Industry Leader, Professional, and Reliable Company. We provide you with the most necessary features that will make your experience better. Not only we guarantee the fastest and the most exciting returns on your investments, but we also guarantee the security of your investment.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__copyright" style={{ background: "transaparent", marginTop: "5rem" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="footer__copyright__text text-light">
                <p className='py-3'>
                  © 2023 Dream Achievers - All Rights Reserved
                </p>
              </div>
            </div>
            <div className="col-lg-4">

              <div className="footer__copyright__text text-light text-right">
                <p className='py-3'>
                  Designed and Developed by <a href='https://www.mobiloitte.com/' target="_blank">Rohit Dex</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <img src="/assets/img/blue-blob.svg" className='img-blur-1' height={1050} alt="circle" />
      <img src="/assets/img/blue-blob.svg" className='img-blur-2' height={850} alt="circle" /> */}
    </div>
  );
}

export default App;
