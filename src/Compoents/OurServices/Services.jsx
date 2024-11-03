
import "./Services.css"

const Services = () => {
  return (
    <div className="Services" id="Services">
        <h1 data-aos="fade-right">Our Services</h1>
        <div className="mad-services">
            <div data-aos="zoom-in" className="img-Services1">
                <button  data-aos="flip-left"> HAIRCUTS</button>
            </div>

            <div data-aos="zoom-in" className="img-Services2">
                <button data-aos="flip-right"> BEARD AND MORE</button>
            </div>


            <div data-aos="zoom-in" className="img-Services3">
                <button data-aos="flip-left"> SHACING</button>
            </div>


            <div  data-aos="zoom-in" className="img-Services4">
                <button data-aos="flip-right"> RAZOR BLADE</button>
            </div>
        </div>
    </div>
  )
}

export default Services