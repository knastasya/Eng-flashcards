import React, { useContext } from 'react';

import WordsList from './WordsList';
import HeaderList from './HeaderList';
import data from '../../../data/data.json';
import WordsContext from '../../../providers/WordsContext';

export default function ContainerWordsList() {

const [ wordsAPI ] = useContext( WordsContext );

    const deleteWord = id => {
        fetch( `api/words/${id}/delete`, {
            method: 'POST',
            body: JSON.stringify(''),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then( response => response.json() )
            .then( response => {
                console.log(response);
            })
            .catch( error => console.log( `Ошибка удаления слова: ${error}` ));
    };

    const changeWord = (id, changedWord) => {
        fetch( `api/words/${id}/update`, {
            method: 'POST',
            body: JSON.stringify(changedWord),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then( response => response.json() )
            .then( changedWord => {
                console.log( changedWord );
            })
            .catch( error => console.log( `Ошибка отправки на сервер: ${error}`));
    };


    return(
<>
<HeaderList/>
{ 
                ( wordsAPI !== undefined&&wordsAPI.length !== 0 )?
                    wordsAPI.map(( word ) => {
                        return(
                            <WordsList
                                key = { word.id }
                                word = { word.english }
                                transcription = { word.transcription }
                                russian = { word.russian }
                                id = { word.id }
                                deleteWord = { deleteWord }
                                changeWord = { changeWord }/>
                        );
                    }):
                    data.map(( word, index ) => {
                        return <WordsList key = { index } {...word}/>;
                    })
            }
</>
    )
}

