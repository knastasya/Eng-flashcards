import React from 'react';
import './WordsList.scss';
import iconEdit from '../../../images/edit-word.png';
import deleteWord from '../../../images/deleteworld.png';
// import cancelEdit from '../../../images//cancel.png';
// import saveEdit from '../../../images/save.png'



export default function WordsList(props) {

    return (
        <div className='wordsList'>
            <div className='wordsList__header'>
        <span className='wordsList__item'>{props.english}</span>
        <span className='wordsList__item'>{props.transcription}</span>
        <span className='wordsList__item'>{props.russian}</span>
        <span className='wordsList__item wordsList__item_icon'>
        {/* <img className='wordsList__item_img' src={saveEdit} alt="Сохранить" /> появляется при нажатии "редактировать" */}
            {/* <img className='wordsList__item_img' src={cancelEdit} alt="Отменить изменения" /> появляется при нажатии "редактировать"*/}
            <img className='wordsList__item_img' src={iconEdit} alt="Редактировать слово" />
            <img className='wordsList__item_img' src={deleteWord} alt="Удалить слово" />
        </span>
            </div>
        </div>
    )
}

