import React from 'react';
import './WordsList.scss';

export default function HeaderList() {

    return (
<section className='wordsList'>
<div className='wordsList__header'>
<span className='wordsList__item'>Cлово</span>
<span className='wordsList__item'>Транскрипция</span>
<span className='wordsList__item'>Перевод</span>
<div className='wordsList__item wordsList__item_btn'><button className=' wordsList__btn'>Добавить слово</button></div>
</div>
</section>
    )
}