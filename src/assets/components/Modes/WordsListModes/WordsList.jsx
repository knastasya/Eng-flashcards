import React, { useState, useEffect, useContext } from 'react';

import './WordsList.scss';
import './AddTheWord.scss';

import iconEdit from '../../../images/edit-word.png';
import cancelEdit from '../../../images/cancel.png'
import deleteItem from '../../../images/deleteworld.png';
import saveEdit from '../../../images/save.png';

import WordsContext from '../../../providers/WordsContext';


export default function WordsList(props) {

    const [ wordsAPI, needRefresh, setNeedRefresh ] = useContext(WordsContext);

    const [editWordPressed, setEditWordPressed] = useState(false);
    const [deleteWordPressed, setDeleteWordPressed] = useState(false);
    const [cancelPressed, setCancelPressed] = useState(false);
    const [inputValue, setInputValue] = useState('');


    const handleClick = () => {
        setEditWordPressed(!editWordPressed);
        };

    const handleDelete = () => {
        setDeleteWordPressed(!deleteWordPressed);
        setEditWordPressed(!editWordPressed);
        };

    const handleCancel = () => {
        setCancelPressed(!cancelPressed);
        setEditWordPressed(!editWordPressed);
        }

    const handleChange = (event) => {
        setInputValue(event.target.value);
        }

        useEffect( () => {
            setNeedRefresh(!needRefresh);
        }, [] );

    return ( 
        editWordPressed ?

        <div className={deleteWordPressed ? 'containerWordList containerWordList__hidden' : 'containerWordList'}>
        <div className='wordsList'>
            <div className='wordsList__header addTheWord addTheWord__change'>
        <span className='wordsList__item'><input type='text' name='word' value={props.english} onChange = { handleChange }></input></span>
        <span className='wordsList__item'><input type='text' name='transcription' value={props.transcription} onChange = { handleChange }></input></span>
        <span className='wordsList__item'><input type='text' name='translation' value={props.russian} onChange = { handleChange }></input></span>
        <span className='wordsList__item wordsList__item_icon'>
            <img className='wordsList__item_img' src={cancelEdit} alt='Отменить' title='Отменить' onClick={ handleCancel }/>
            <img className='wordsList__item_img' src={saveEdit} alt='Сохранить' title='Сохранить'/>
            <img className='wordsList__item_img' src={deleteItem} alt='Удалить слово' title='Удалить' onClick={ handleDelete }/>
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
            <img className='wordsList__item_img' src={deleteItem} alt='Удалить слово' title='Удалить' onClick={ handleDelete }/>
        </span>
            </div>
        </div>
        </div>
        </>
    )
}