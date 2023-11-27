import React, { useState } from 'react';
import './WordsList.scss';
import './AddTheWord.scss';

import iconEdit from '../../../images/edit-word.png';
import cancelEdit from '../../../images/cancel.png'
import deleteWord from '../../../images/deleteworld.png';
import saveEdit from '../../../images/save.png';

export default function WordsList(props) {

    const [editWordPressed, setEditWordPressed] = useState(false);
    const handleClick = () => {
        setEditWordPressed(!editWordPressed);
        };

    const [deleteWordPressed, setDeleteWordPressed] = useState(false);
    const handleDelete = () => {
        setDeleteWordPressed(!deleteWordPressed);
        };

    const [cancelPressed, setCancelPressed] = useState(false);
    const handleCancel = () => {
        setCancelPressed(!cancelPressed);
        }

    const [inputValue, setInputValue] = useState('');
    const handleChange = (event) => {
        setInputValue(event.target.value);
        }



    return ( 

        editWordPressed && !cancelPressed ?

        <div className={deleteWordPressed ? 'containerWordList containerWordList__hidden' : 'containerWordList'}>
        <div className='wordsList'>
            <div className='wordsList__header addTheWord addTheWord__change'>
        <span className='wordsList__item'><input type='text' name='word' value={props.english} onChange = { handleChange }></input></span>
        <span className='wordsList__item'><input type='text' name='transcription' value={props.transcription} onChange = { handleChange }></input></span>
        <span className='wordsList__item'><input type='text' name='translation' value={props.russian} onChange = { handleChange }></input></span>
        <span className='wordsList__item wordsList__item_icon'>
            <img className='wordsList__item_img' src={cancelEdit} alt='Отменить' title='Отменить' onClick={ handleCancel }/>
            <img className='wordsList__item_img' src={saveEdit} alt='Сохранить' title='Сохранить'/>
            <img className='wordsList__item_img' src={deleteWord} alt='Удалить слово' title='Удалить' onClick={ handleDelete }/>
        </span>
            </div>
        </div>
        </div>
        :

        <>
        <div className={deleteWordPressed ? 'containerWordList containerWordList__hidden' : 'containerWordList'}>
        <div className='wordsList'>
            <div className='wordsList__header'>
            <span className='wordsList__item'>{props.english}</span>
            <span className='wordsList__item'>{props.transcription}</span>
            <span className='wordsList__item'>{props.russian}</span>
        <span className='wordsList__item wordsList__item_icon'>
            <img className='wordsList__item_img' src={iconEdit} alt='Редактировать слово' title='Изменить' onClick={ handleClick }/>
            <img className='wordsList__item_img' src={deleteWord} alt='Удалить слово' title='Удалить' onClick={ handleDelete }/>
        </span>
            </div>
        </div>
        </div>
        </>
        
        
    )
}







