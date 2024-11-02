import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright} from '@fortawesome/free-solid-svg-icons'
import at_img from "../../assets/png-clipart-cape-may-winery-adventure-himalayan-travels-computer-keyboard-at-sign-arroba-location-blue-text.png"

const Footer = () => {
  return (
    <div className="Footer">
        <div className="end_footer">
        <hr />

        <p>  <FontAwesomeIcon icon={faCopyright} />CopyRight by : A7med</p>

        </div>

    </div>
  )
}

export default Footer