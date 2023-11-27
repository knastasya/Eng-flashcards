import React, { useState } from 'react';
import './WordsList.scss';
import './AddTheWord';
import AddTheWord from './AddTheWord';

export default function HeaderList() {

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
{addWordPressed && <AddTheWord/>}
</section>
</div>
    )
}