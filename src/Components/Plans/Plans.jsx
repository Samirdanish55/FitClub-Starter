import React from 'react'
import './Plans.css'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
  return (
    <div className="plains-container">
        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>
        <div className="programs-header" style={{gap:'2rem'}}>
            <span className='stroke-text'>READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span className='stroke-text'>NOW WITHUS</span>
        </div>

        {/* Plans Card */}
        <div className="plans">
            {plansData.map((Plans,i)=>(
                <div className="plan" key={i}>
                    {plansData.icon}
                    <span>{Plans.name}</span>
                    <span>$ {Plans.price}</span>

                    <div className="features">
                        {Plans.features.map((features, i)=> (
                            <div className="feature">
                                <img src={whiteTick} alt="" />
                                <span key={i}>{features}</span>
                            </div>
                        ))}
                    </div>

                    <div>
                        <span>see more benefits -</span>
                    </div>
                    <button className='btn'>Join Now</button>

                </div>
            ))}
        </div>
    </div>
  )
}

export default Plans