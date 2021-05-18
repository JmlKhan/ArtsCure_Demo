import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

import cover from '../images/cover.jpg';

const HeroSection = () => {
    return ( 
        <div className='hero-container'>
            <img src={cover} alt="cover" />
            
           
            <h1>ArtsCure</h1>
            <h3>Art is a line around your thoughts.</h3>
            <p>  ―  Gustav Klimt </p>
            
            <Button   className='btn' 
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            >
                Explore
            </Button> 
          
        </div>
     );
}
 
export default HeroSection;