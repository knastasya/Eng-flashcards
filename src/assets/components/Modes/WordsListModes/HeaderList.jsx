import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';

import './WordsList.scss';
import './AddTheWord';
import AddTheWord from './AddTheWord';

const HeaderList = observer(( props ) => {
    const wordsStore = props.wordsStore;

    const [addWordPressed, setAddWordPressed] = useState(false);
    const handleClick = () => {
        setAddWordPressed(!addWordPressed);
    }
    
    return (
        <div className='containerWordList'>
<section className='wordsList'>
<div className='wordsList__header'>
<span className='wordsList__item'>Cлово</span>
<span className='wordsList__item'>Транскрипция</span>
<span className='wordsList__item'>Перевод</span>
<div className='wordsList__item wordsList__item_btn'><button className='wordsList__btn' onClick={ handleClick }>Добавить слово</button></div>
</div>
{addWordPressed && 
<AddTheWord
    word = { '' }
    transcription = { '' }
    russian = { '' }
    addWordPressed = { addWordPressed }
    setAddWordPressed = { setAddWordPressed }
    wordsStore = { wordsStore }
    />}
</section>
</div>
    )
})

export default HeaderList;