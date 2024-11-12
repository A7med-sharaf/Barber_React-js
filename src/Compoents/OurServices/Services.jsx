
import "./Services.css"

const Services = () => {
  return (
    <div className="Services" id="Services">
        <h1 data-aos="fade-right">Our Services</h1>
        <div className="mad-services">
            <div data-aos="zoom-in" className="img-Services1">
                <a href="#BOOKANAPPOINTMENT"  data-aos="flip-left">  HAIRCUTS</a>
            </div>

            <div data-aos="zoom-in" className="img-Services2">
                <a href="#BOOKANAPPOINTMENT"   data-aos="flip-right"> BEARD AND MORE</a>
            </div>


            <div data-aos="zoom-in" className="img-Services3">
                <a href="#BOOKANAPPOINTMENT" data-aos="flip-left" > SHACING</a>
            </div>


            <div  data-aos="zoom-in" className="img-Services4">
                <a href="#BOOKANAPPOINTMENT" data-aos="flip-right"> RAZOR BLADE</a>
            </div>
        </div>
    </div>
  )
}

export default Services