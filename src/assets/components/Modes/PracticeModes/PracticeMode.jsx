import React from 'react';

import './PracticeMode.scss';
import Slider from './Slider';


export default function PracticeMode() {

    return (
        <main className='practiceMode'>
            <Slider/>

            <div className='btn-container'>
                <button className='knowBtn wordCard__answer-btn'>Знаю</button>
                <button className='dontKnowBtn wordCard__answer-btn'>Не знаю</button>
            </div>
        </main>
    )
}

PracticeMode.defaultProps = {
    english: 'Hello',
    transcription: '|həˈləʊ|',
    russian: 'Привет'
};

