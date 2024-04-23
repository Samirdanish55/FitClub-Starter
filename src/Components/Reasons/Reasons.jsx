import React from 'react'
import './Reasons.css'
import Image1 from '../../assets/image1.png'
import Image2 from '../../assets/image2.png'
import Image3 from '../../assets/image3.png'
import Image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'

const Reasons = () => {
  return (
    <div className="Reasons" id='reasons'>
        <div className="left-r">
            <img src={Image1} alt="" />
            <img src={Image2} alt="" />
            <img src={Image3} alt="" />
            <img src={Image4} alt="" />
        </div>
        <div className="right-r">
            <span>some reasons</span>

            <div>
                <div><span className='stroke-text'>why</span>&nbsp;</div>
                <span>choose us?</span>
            </div>

          <div className='details-r'>
            <div>
                <img src={tick} alt=""></img>
                <span>OVER 140+ EXPERT COACHS</span>
            </div>
            <div>
                <img src={tick} alt=""></img>
                <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
            </div>
            <div>
                <img src={tick} alt=""></img>
                <span>1 FREE PROGRAM FOR NEW MEMBER</span>
            </div>
            <div>
                <img src={tick} alt=""></img>
                <span>REALIABLE PARTNER</span>
            </div>
          </div>

          <span style={{
            color:'var(--gray)',
            fontWeight: 'normal',
          }}>
            OUR PARTNERS
          </span>

          <div className="partners">
            <img src={nb} alt="" />
            <img src={adidas} alt="" />
            <img src={nike} alt="" />
          </div>

        </div>
    </div>
  );
};

export default Reasons