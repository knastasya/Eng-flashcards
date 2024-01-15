import React, { useEffect, useState } from 'react';
import './HeaderList'
import './WordsList.scss'; 
import './AddTheWord.scss';

const defaultEmptyInput = {
    word: true,
    transcription: true,
    russian: true
};

const defaultInputs = {
    word: '',
    transcription: '',
    translation: ''
};

const defaultMistakes = {
    word: '',
    transcription: '',
    translation: ''
};

const mistakesText = {
    word: 'Поле слова должно быть заполнено английскими буквами. Оно не может содержать цифры, небуквенные символы или быть пустым',
    transcription: 'Поле транскрипции не может содержать цифры, пробел или быть пустым',
    translation: 'Поле перевода должно быть заполнено русскими буквами. Оно не может содержать цифры, небуквенные символы или быть пустым'
};

const reWord = /[^a-zA-Z]+/;
const reTranscription = /[\d\s]+/;
const reRussian = /[^а-яА-ЯёЁ,/]+/;

export default function AddTheWord() {

    const [addedWord, setAddedWord] = useState(defaultInputs);
    const [emptyInput, setEmptyInput] = useState(defaultEmptyInput);
    const [savePressed, setSavePressed] = useState(0);
    const [inputMistakes, setInputMistakes] = useState(defaultMistakes);

    const [totalEmptyInputState, setTotalEmptyInputState] = useState(false);

    useEffect(() => {
        setTotalEmptyInputState( emptyInput.word||emptyInput.russian||emptyInput.transcription );
    }, [ emptyInput ]);

    const handleChangeInputs = (e) => {
        if(e.target.value === '') {
            e.target.classList.add('incorrect');
            setEmptyInput(  {...emptyInput,
                [e.target.name]: true });
        }
        else{
            e.target.classList.remove('incorrect');
            setEmptyInput({ ...emptyInput,
                [e.target.name]: false });
        }
    }

    const checkInputsValidation = (e) => {
        const name = e.target.name;
        let regexp;
        let mistakeText;

        if( name === 'word' ){ 
            regexp = reWord;
            mistakeText = mistakesText.word; }
        else if ( name === 'russian'){ 
            regexp = reRussian;
            mistakeText = mistakesText.russian; }
        else { 
            regexp = reTranscription;
            mistakeText = mistakesText.transcription; }

        regexp.test( e.target.value )
            ?setInputMistakes({ ...inputMistakes, [name]: mistakeText })
            :setInputMistakes({ ...inputMistakes, [name]: ''});
    };

    const saveChanges = () => {
        setSavePressed( prevState => prevState + 1 );
        if(!Object.values(inputMistakes).join('')) {
            setSavePressed(0);
            
            const newWord = {
                english: addedWord.word,
                transcription: addedWord.transcription,
                russian: addedWord.russian
            };

            setAddedWord(newWord);
            setAddedWord(defaultInputs);
        };

        checkInputsValidation(e);
        setAddedWord( { ...addedWord,
            [e.target.name]: e.target.value.toLowerCase() });
    };

        

    return (
        <>
<div className='wordsList__header addTheWord'>
<span className='wordsList__item'><input type="text" value={addedWord.english} name='english' onChange={handleChangeInputs}/></span>
<span className='wordsList__item'><input type="text" value={addedWord.transcription} name='transcription' onChange={handleChangeInputs}/></span>
<span className='wordsList__item'><input type="text" value={addedWord.russian} name='russian' onChange={handleChangeInputs}/></span>
<div className='wordsList__item wordsList__item_btn'><button className = { totalEmptyInputState ?  'wordsList__btn disabled' : 'wordsList__btn'} 
disabled = { totalEmptyInputState ? true : false } onClick = {saveChanges}>Сохранить</button></div>
</div>

{<div className = {(savePressed > 0) && Object.values(inputMistakes).join('')?
                'wordsList__warning wordsList__warning_showed':'wordsList__warning'}
            >
                {Object.values(inputMistakes).map((mistake, index) => {
                    return(
                        <div className = "mistake" key = { index }>{ mistake }</div>
                    );
                })} 
            </div>}
            </>
    )
}