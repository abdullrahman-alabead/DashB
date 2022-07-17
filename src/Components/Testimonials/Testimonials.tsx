import { Col } from 'react-bootstrap'
import User from '../../assets/images/user.png'
import './Testimonials.scss'

let Testimonials = () => {

  // Slide Testimonials
  function switchTestimonial(ele: EventTarget, i: number){
    // activate Btn
    let btns = document.querySelectorAll(".slider-btn");
    for(let i = 0; i <btns.length; i++){
      btns[i].classList.remove("active")
    }
    if(ele instanceof HTMLElement){
      ele.classList.add("active")
    }
    // switch
    let slider = document.querySelector(".testimonials");
    if(slider instanceof HTMLElement){
      slider.style.transform = `translateX(${i}px)`
    }
  }
  return (
    <Col className='widget testimonials-container'>
    <p className='widget-name'>Testemonials</p>
    <div className="testimonials-slider overflow-hidden">
      <div className="testimonials d-flex text-center text-white">
        <div className="testimonial">
          <img src={User} className="t-pic" />
          <p className="t-name">John Doe</p>
          <p className="t-job">Profession</p>
          <p className="t-text">"Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam"</p>
        </div>
        <div className="testimonial">
          <img src={User} className="t-pic" />
          <p className="t-name">John Doe</p>
          <p className="t-job">Profession</p>
          <p className="t-text">"Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam"</p>
        </div>
        <div className="testimonial">
          <img src={User} className="t-pic" />
          <p className="t-name">John Doe</p>
          <p className="t-job">Profession</p>
          <p className="t-text">"Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam"</p>
        </div>
        <div className="testimonial">
          <img src={User} className="t-pic" />
          <p className="t-name">John Doe</p>
          <p className="t-job">Profession</p>
          <p className="t-text">"Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam"</p>
        </div>
      </div>
    </div>
    <div className="slider">
      <span className="slider-btn active" onClick={(e) => switchTestimonial(e.target, 0)}></span>
      <span className="slider-btn" onClick={(e) => switchTestimonial(e.target, (-566 * 1))}></span>
      <span className="slider-btn" onClick={(e) => switchTestimonial(e.target, (-566 * 2))}></span>
      <span className="slider-btn" onClick={(e) => switchTestimonial(e.target, (-566 * 3))}></span>
    </div>
  </Col>
  )
}

export default Testimonials;