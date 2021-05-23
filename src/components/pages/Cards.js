import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import {Button}  from '../Button';
//Images
import clown from '../../images/clown.jpg';
import hm from '../../images/hm.jpg';
import msd from '../../images/msd.jpg';


function Cards() {
  return (
    <div className='cards'>
      <h1>Newly Added Art works!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          
            <CardItem
              src={clown}
              label='Masqaraboz'
              path="/Clown.js"
             />
            
            
            <CardItem
              src={hm}
              label='Luxury'
            //  path='/services'
            />
            <CardItem
              src={hm}
              label='Luxury'
            //  path='/services'
            />
            <CardItem
              src={hm}
              text='Painting description'
              label='Luxury'
            //  path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={msd}
              label='Mystery'
             // path='/services'
            />
            <CardItem
              src={clown}
              label='Adventure'
             // path='/products'
            />
            <CardItem
              src={clown}
              label='Adrenaline'
              //path='/sign-up'
            />
            <CardItem
              src={clown}
              label='Adrenaline'
              //path='/sign-up'
            />
            
          </ul>
        </div>

      </div>
      <div className="view-more">
            <Button   className='btn' 
              buttonStyle='btn--outline'
              buttonSize='btn--large'
            >
               View More
            </Button> 
      </div>
    </div>
  );
}

export default Cards;