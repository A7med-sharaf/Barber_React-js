import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faHome,faGhost,faScissors} from '@fortawesome/free-solid-svg-icons'
import barber_icon from '../../assets/hairdresserscissorsandcomb_89167.svg'

const Navbar = () => {
  return (
    <div >
        <nav className=" navbar bg-body-tertiary fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span> <img  src= {barber_icon} width="35"  alt="" /></span> Barber </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="">  <FontAwesomeIcon className='iconCheck' icon={faScissors}/>    </span>
    </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header" >
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><span> <img  src= {barber_icon} width="35"  alt="" /></span> Barber </h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav underline justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#Services">Our Services</a>
            <a className="nav-link active" aria-current="page" href="#OurPrices">Our Prices</a>
           
            <a className="nav-link active" aria-current="page" href="#TextMain">TextMain</a>
            <a className="nav-link active" aria-current="page" href="#WorkingHourse">WorkingHourse</a>
            <a className="nav-link active" aria-current="page" href="#BOOKANAPPOINTMENT">BOOK AN APPOINTMENT</a>
            <a className="nav-link active" aria-current="page" href="#ContactBarbe">ContactBarbe</a>
            <a className="nav-link active" aria-current="page" href="#Consultation">Consultation</a>
            <a className="nav-link active" aria-current="page" href="#MensHaircut">MensHaircut</a>
            <a className="nav-link active" aria-current="page" href="#Fullservice">Fullservice</a>
            <a className="nav-link active" aria-current="page" href="#ContactUs">Contact Us</a>
          </li>
         
          
        </ul>
        
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar