import React, { useState, useContext } from 'react';

import './AddTheWord';
import AddTheWord from './AddTheWord';
import WordsContext from '../../../providers/WordsContext';

import './WordsList.scss';

export default function HeaderList() {

    const [ getLoader, needRefresh, setNeedRefresh ] = useContext( WordsContext );

    const [addWordPressed, setAddWordPressed] = useState(false);
    const handleClick = () => {
        setAddWordPressed(!addWordPressed);
    }
    
    const saveNewWord = async newWord => {

        getLoader(true);
        
        try{
            const response = await fetch( 'api/words/add', {
                method: 'POST',
                body: JSON.stringify( newWord ),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            });

            const data = await response.json();
            console.log( 'word saved', data );
            setTimeout( () => getLoader( false ), 500 );
        }
        catch( error ){ 
            console.log( `Ошибка добавления слова на сервер: ${error}`);
            setTimeout( () => getLoader( false ), 500 );
        };

        setNeedRefresh( !needRefresh );
    };
    
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
saveNewWord = { saveNewWord }/>}
</section>
</div>
    )
}