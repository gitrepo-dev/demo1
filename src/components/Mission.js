import React from 'react'
import BlockCircle from '../assets/blockchain-circle.png'
import Fac from '../assets/fac.png'

export default function Mission() {
    return (
        <div className="container py-3 py-md-5">
            <div className="row">
                <div className="col-12 mb-4">
                    <h2 className='font-weight-bold'><b>Mission:</b></h2>
                </div>
                <div className="col-md-3 mb-4 mb-md-0">
                    <div className="mission-block-wrapper position-relative">
                        <h5 className='font-weight-normal mb-0 text-md-end text-dark px-md-5 mx-md-0'>Application of the blockchain for the management of business processes...</h5>
                        <div className='circle-img'>
                            <img src={BlockCircle} className='img-sm spinner-border' alt='' />
                        </div>
                    </div>
                </div>
                <div className="col-md-9 text-md-end">
                    <h5 className="font-weight-normal">...to make them <br />easier and</h5>
                    <div className="fac-wrapper">
                        <div className="d-flex align-items-center">
                            <img src={Fac} className='img-md' alt='' />
                            <div className="car-liner-anim"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
