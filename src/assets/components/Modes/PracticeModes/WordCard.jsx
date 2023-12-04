import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import './PracticeMode.scss';
import page from '../../../images/page.png';

export default function WordCard (props) {

    const [сheckTheWord, setCheckTheWord] = useState(false);
    const handleChange = () => {
        setCheckTheWord(!сheckTheWord);
    }

    return (
        <React.Fragment>
            <div className='wordCard'>
            <img className='wordCard__img' src={ page } alt="Карточка тетрадный лист" />
            <div className = "wordCard__wordEng">{props.english}</div>
            <div className = "wordCard__wordTrascrip">{props.transcription}</div>
            
            <CSSTransition in = { сheckTheWord } timeout = { 1000 } classNames = "check-transition">
            {сheckTheWord ? 
            <div className = "wordCard__wordRus">{props.russian}</div>
            : 
            <div>
                <button className='wordCard__check' onClick={handleChange}>Проверить</button>
            </div>}
            </CSSTransition>
            </div>
        </React.Fragment>
    )
}