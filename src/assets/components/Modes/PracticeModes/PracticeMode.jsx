import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import './PracticeMode.scss';
import page from '../../../images/page.png';


export default function PracticeMode() {

    const [сheckTheWord, setCheckTheWord] = useState(false);
    const handleChange = () => {
        setCheckTheWord(!сheckTheWord);
    }

    return (
        <section className='practiceMode'>
            <div className='wordCard'>
            <img className='wordCard__img' src={ page } alt="Карточка тетрадный лист" />
            <div className = "wordCard__wordEng">Hello</div>
            <div className = "wordCard__wordTrascrip">|həˈləʊ|</div>
            <CSSTransition in = { сheckTheWord } timeout = { 1000 } classNames = "check-transition">
            {сheckTheWord ? 
            <div className = "wordCard__wordRus">Привет</div>
            : 
            <div>
                <button className='wordCard__check' onClick={handleChange}>Проверить</button>
            </div>}
            </CSSTransition>
            </div>


            <div className='btn-container'>
                <button className='knowBtn wordCard__answer-btn'>Знаю</button>
                <button className='dontKnowBtn wordCard__answer-btn'>Не знаю</button>
            </div>
        </section>
    )
}

