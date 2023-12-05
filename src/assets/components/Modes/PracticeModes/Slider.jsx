import React, {useState} from 'react';
import './Slider.scss';

import prevSlide from '../../../images/prev-slide.png';
import nextSlide from '../../../images/next-slide.png';

import WordCard from './WordCard';
import data from '../../../data/data.json';


export default function Slider() {

  const [currentIndex, setCurrentIndex] = useState(0);

  function showNextCard() {
    setCurrentIndex((prevCard) => (prevCard === data.length - 1 ? 0 : prevCard + 1));
  };

  function showPrevCard() {
    setCurrentIndex((prevCard) => (prevCard === 0 ? data.length - 1 : prevCard - 1));
  };

  return (
    <div className='Slider'>
      <img src={prevSlide} alt="Стрелка назад" className='Slider__button' onClick={showPrevCard}/>
      <div className='Slider__container'>
        <div className='Slider__page'>
          <div className='Slider__frame'>
            {data.map((item, index) => {
              if(index === currentIndex) {
                return <WordCard key={index} {...item} />;
              }
            })}
          </div>

        </div>
      </div>
      <img src={nextSlide} alt="стрелка вперед" className='Slider__button' onClick={showNextCard}/>
    </div>
  )
}