import React from 'react';
import './WordsList.scss'; 
import './AddTheWord.scss'


export default function AddTheWord() {

    return (
<div className='wordsList__header addTheWord'>
<span className='wordsList__item'><input type="text"/></span>
<span className='wordsList__item'><input type="text"/></span>
<span className='wordsList__item'><input type="text"/></span>
<div className='wordsList__item wordsList__item_btn'><button className=' wordsList__btn'>Сохранить</button></div>
</div>
    )
}