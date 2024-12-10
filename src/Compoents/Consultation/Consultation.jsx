import "./Consultation.css"
import barber from '../../assets/yyyy.jpg'
import pixel from '../../assets/pexels-photo-4576085.jpeg'
import pixel2 from '../../assets/pexels-photo-5141074.jpeg'
import pixel3 from '../../assets/pexels-photo-9821204.jpeg'

const Consultation = () => {
  return (
    <div className="Consultation" id="Consultation">
        <div  data-aos="fade-up" className="postion-img">
            <img data-aos="fade-right" src={barber} alt="" />
            <div data-aos="fade-right" className="border">
                <h2>Free consultation</h2>
                <p>Get in touch with our expert barbers for a FREE one-on-one consultation. </p>
                <a  href="https://wa.me/249998693985" target="blank">BOOK NOW</a>
            </div>
        </div>
        <div className="ConsultationBorder">
        <h2 data-aos="fade-down">Testimonials</h2>
        <div className="img-center">
        <div className="ConsultationBorder_Box ">
          <img data-aos="zoom-in" src={pixel} alt="" />
          <h3 data-aos="fade-up">stella larson</h3>
          <p data-aos="fade-up">Sample text. Click to select the text box. Click again or
           double click to start editing the text.</p>
        </div>


        <div className="ConsultationBorder_Box ">
          <img data-aos="zoom-in" src={pixel2} alt="" />
          <h3 data-aos="fade-up">nick jhonson</h3>
          <p data-aos="fade-up">Sample text. Click to select the text box. Click again or
           double click to start editing the text.</p>
        </div>


        <div className="ConsultationBorder_Box ">
          <img data-aos="zoom-in" src={pixel3} alt="" />
          <h3 data-aos="fade-up">olga ivanova</h3>
          <p data-aos="fade-up">Sample text. Click to select the text box. Click again or
           double click to start editing the text.</p>
        </div>
        </div>

        </div>
    </div>
  )
}

export default Consultation