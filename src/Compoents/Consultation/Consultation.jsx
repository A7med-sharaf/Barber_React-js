import "./Consultation.css"
import barber from '../../assets/yyyy.jpg'
import pixel from '../../assets/beard-4136705_1920.jpg'
import pixel2 from '../../assets/adult-1867471_640.jpg'
import pixel3 from '../../assets/pexels-photo-5141074.jpeg'

const Consultation = () => {
  return (
    <div className="Consultation" id="Consultation">
        <div  data-aos="fade-up" className="postion-img">
            <img data-aos="fade-right" src={barber} alt="" />
            <div data-aos="fade-right" className="border">
                <h2>Free consultation</h2>
                <p>Get in touch with our expert barbers for a FREE one-on-one consultation. </p>
                <a  href="https://wa.me/249998693985" target="blank" style={{fontSize:"1rem"}}>consultation</a>
            </div>
        </div>
        <div className="ConsultationBorder">
        <h2 data-aos="fade-down">Testimonials</h2>
        <div className="img-center">
        <div className="ConsultationBorder_Box ">
          <img data-aos="zoom-in" src={pixel} alt="" />
          <h3 data-aos="fade-up">Peter larson</h3>
          <p data-aos="fade-up">Peter larsonis an amazing barber! He always gives the perfect cut and makes sure I leave looking sharp. Highly recommended!.</p>
        </div>


        <div className="ConsultationBorder_Box ">
          <img data-aos="zoom-in" src={pixel2} alt="" />
          <h3 data-aos="fade-up">nick jhonson</h3>
          <p data-aos="fade-up">Nick Johnson an amazing barber! He always gives the perfect cut and makes sure I leave looking sharp. Highly recommended!.</p>
        </div>


        <div className="ConsultationBorder_Box ">
          <img data-aos="zoom-in" src={pixel3} alt="" />
          <h3 data-aos="fade-up">John ivanova</h3>
          <p data-aos="fade-up">John is an amazing barber! He always gives the perfect cut and makes sure I leave looking sharp. Highly recommended!.</p>
        </div>
        </div>

        </div>
    </div>
  )
}

export default Consultation