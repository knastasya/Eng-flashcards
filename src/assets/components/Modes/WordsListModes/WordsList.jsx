import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';

import './WordsList.scss';
import './AddTheWord.scss';

import iconEdit from '../../../images/edit-word.png';
import cancelEdit from '../../../images/cancel.png'
import deleteWord from '../../../images/deleteworld.png';
import saveEdit from '../../../images/save.png';

const WordsList = observer(( props ) => {

    const wordsStore = props.wordsStore;

    useEffect(() => wordsStore.refreshWordsAPI,
    [ wordsStore.needRefresh ] );

    const [editWordPressed, setEditWordPressed] = useState(false);
    const [deleteWordPressed, setDeleteWordPressed] = useState(false);
    const [cancelPressed, setCancelPressed] = useState(false);
    const [inputValue, setInputValue] = useState(props);

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

    return ( 
        editWordPressed ?

        <div className={deleteWordPressed ? 'containerWordList containerWordList__hidden' : 'containerWordList'}>
        <div className='wordsList'>
            <div className='wordsList__header addTheWord addTheWord__change'>
        <span className='wordsList__item'><input type='text' name='word' value={inputValue.english} onChange = { handleChange }></input></span>
        <span className='wordsList__item'><input type='text' name='transcription' value={inputValue.transcription} onChange = { handleChange }></input></span>
        <span className='wordsList__item'><input type='text' name='translation' value={inputValue.russian} onChange = { handleChange }></input></span>
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
})

export default WordsList;