import React from 'react';
import './PracticeMode.scss';
import page from '../../../images/page.png';

export default function PracticeMode() {

    const checkTheWord = () => {
        const checkBtn = document.querySelector('.wordCard__check');
        checkBtn.style.display = 'none'
    }


    return (
        <section className='practiceMode'>
            <div className='wordCard'>
            <img className='wordCard__img' src={ page } alt="Карточка тетрадный лист" />
            <div className = "wordCard__wordEng">Hello</div>
            <div className = "wordCard__wordTrascrip">|həˈləʊ|</div>
            <div className = "wordCard__wordRus">Привет</div>
            </div>

            <div>
                <button className='wordCard__check' onClick={checkTheWord}>Проверить</button>
            </div>

            <div className='btn-container'>
                <button className='knowBtn wordCard__answer-btn'>Знаю</button>
                <button className='dontKnowBtn wordCard__answer-btn'>Не знаю</button>
            </div>
        </section>
    )
}