import React, { useState } from 'react';

import './PracticeMode.scss';
import Slider from './Slider';


export default function PracticeMode() {

    const [knownThisWord, setKnownThisWord] = useState(0);
    const [unKnownThisWord, setUnKnownThisWord] = useState(0);

    const knownWordsCount = () => {
        setKnownThisWord(knownThisWord + 1);
    }

    const unKnownWordsCount = () => {
        setUnKnownThisWord(unKnownThisWord + 1);
    }

    return (
        <main className='practiceMode'>
            <Slider/>

            <div className='btn-container'>
                <button className='knowBtn wordCard__answer-btn' onClick = { knownWordsCount }>
                { knownThisWord === 0 ? 'Знаю' : `Знаю (${ knownThisWord })`}
                </button>
                <button className='dontKnowBtn wordCard__answer-btn' onClick={ unKnownWordsCount }>
                { unKnownThisWord === 0 ? 'Не знаю' : `Не знаю (${ unKnownThisWord })`}</button>
            </div>
        </main>
    )
}

PracticeMode.defaultProps = {
    english: 'Hello',
    transcription: '|həˈləʊ|',
    russian: 'Привет'
};