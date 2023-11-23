import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imge1 from './../../../asetse/image1.jpg'
import imge2 from './../../../asetse/image2.jpg'
import './SlaiderStayle.css'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <section className='slaiderx'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 col-md-12'>
            <h2>Testimonials</h2>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12 col-md-12'>
            <Carousel activeIndex={index} onSelect={handleSelect} className='Carousel'>
              <Carousel.Item>
                <img src={imge1}></img>
                <Carousel.Caption>
                  <p>"Far far away, behind the word mountains, far from the countries <br />Vokalia and Consonantia, there live the blind texts. Separated they live far from the countries Vokalia."</p>
                  <span className='web-designer'>Simab Dave - Web Designer</span>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={imge2}></img>
                <Carousel.Caption>
                  <p>"Far far away, behind the word mountains, far from the countries <br />Vokalia and Consonantia, there live the blind texts. Separated they live far from the countries Vokalia."</p>
                  <span className='web-designer'>Johnthan Doe - UX Designer</span>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={imge1}></img>
                <Carousel.Caption>
                  <p>"Far far away, behind the word mountains, far from the countries <br />Vokalia and Consonantia, there live the blind texts. Separated they live far from the countries Vokalia."</p>
                  <span className='web-designer'>Maccy Doe - Front End</span>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>

    </section>

  );
}

export default ControlledCarousel;