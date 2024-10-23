import React from 'react';
import { Link } from 'react-router-dom';

function HomeScreen({bold, desc, hsImg}) {
  return (
    <>
    <div className="main-wrapper">
    <div className="home-screen">
        <div className="hs-left">
            <div className="hs-bold">
            {bold}
            </div>
            <div className="hs-desc">
            {desc}
            </div>
            <Link to="/signup"><button className='hs-button'>Get Started</button></Link>
        </div>
        <div className="hs-right">
            <img src={hsImg} alt="" className='hs-right-img'/>
        </div>
    </div>
    </div>
    </>
  );
}

export default HomeScreen;