
import './Working Hourse.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck} from '@fortawesome/free-solid-svg-icons'

const WorkingHourse = () => {
  return (
    <div className='WorkingHourse' id='WorkingHourse'>
        <div  data-aos="fade-down" className="table_hour">
        <h3>Working Hourse</h3>
            <ul>
                <li> SUNDAY 10 AM – 5 PM</li>
                <li> MONDAY 9 AM – 7PM</li>
                <li>TUESDAY 8AM – 8PM</li>
                <li>WEDNESDAY 8AM – 8PM</li>
                <li>THURSDAY 8AM – 8PM</li>
                <li>  FRIDAY 8AM – 7PM</li>
                <li> SATURDAY 9AM – 6PM </li>
            </ul>
            <a href="#BOOKANAPPOINTMENT">BOOK ONLINE</a>

        </div>
        <div data-aos="fade-up" className="why_chooes_Us">
            <h1>Why choose us?</h1>
            <p>In addition, there 5 more reasons why men prefer Manhattan Barbershop N.Y.C:</p>
            <ul>
                <li>  <FontAwesomeIcon className='iconCheck' icon={faCheck} />Always welcoming environment</li>
                <li> <FontAwesomeIcon className='iconCheck' icon={faCheck} />Our masters focus on the quality </li>
                <li> <FontAwesomeIcon className='iconCheck' icon={faCheck} />We value both the time and the money of our clients </li>
                <li> <FontAwesomeIcon className='iconCheck' icon={faCheck} />We work only with high-quality, hypoallergenic premium products  </li>
                <li> <FontAwesomeIcon className='iconCheck' icon={faCheck} />All surfaces and tools are cleaned, disinfected before and after using </li>
            </ul>
        </div>
        
    </div>
  )
}

export default WorkingHourse