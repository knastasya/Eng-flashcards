import React from 'react';
import './WordsList.scss';
import './AddTheWord';
import AddTheWord from './AddTheWord';

export default function HeaderList() {


    const AddWordPressed = () => {
        const addTheWord = document.querySelector('.addTheWord');
        addTheWord.style.display = 'grid';
    }

    return (
        <div className='containerWordList'>
<section className='wordsList'>
<div className='wordsList__header'>
<span className='wordsList__item'>Cлово</span>
<span className='wordsList__item'>Транскрипция</span>
<span className='wordsList__item'>Перевод</span>
<div className='wordsList__item wordsList__item_btn'><button className='wordsList__btn' onClick={ AddWordPressed }>Добавить слово</button></div>
</div>
{<AddTheWord/>}
</section>
</div>



    )
}