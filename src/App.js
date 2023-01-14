import './App.css';
import NavBar from './Components/Navbar/NavBar';
import NavBar_2 from './Components/Navbar/NavBar_2';
import Main from './Components/Product/Main';

function App() {
  return (
    <div className="">
      <NavBar />
      <NavBar_2 />
      <div className="nav_3 d-flex pe-2 ps-2 justify-content-between align-items-center border">
        <span className='nav_3 fs-5 fw-bold'>Amazon Fashion</span>
        <span>Men</span>
        <span>Women</span>
        <span>Kids</span>
        <span>Bags & Luggage</span>
        <span>Sports Wear</span>
        <span>Sales & Deals</span>
        <div className="d-flex flex-column">
          <span className='text-primary fs-5'>30 DAY RETURNS</span>
          <span className='fs-6'>Restrictions Apply</span>
        </div>
      </div>
      <Main />
      {/* <div className="container">
        <div class="d-flex align-items-center justify-content-center" style={{ height: '80vh' }}>
          <h1>MERN Starter is Up and Running 🚀</h1>
        </div>
      </div> */}
    </div>
  );
}

export default App;
