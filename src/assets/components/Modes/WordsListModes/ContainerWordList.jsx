import React from 'react';
import { observer } from 'mobx-react-lite';

import WordsList from './WordsList';
import HeaderList from './HeaderList';
import data from '../../../data/data.json';

const ContainerWordsList = observer(( props ) => {

    const wordsStore = props.wordsStore;
    
    return(
<>
<HeaderList/>
{ 
                ( wordsStore.wordsAPI !== undefined&&wordsStore.wordsAPI.length !== 0 )?
                    wordsStore.wordsAPI.map(( word ) => {
                        return(
                            <WordsList
                                key = { word.id }
                                word = { word.english }
                                transcription = { word.transcription }
                                russian = { word.russian }
                                id = { word.id }
                                wordsStore = { wordsStore }/>
                        );
                    }):
                    data.map(( word, index ) => {
                        return <WordsList key = { index } {...word}/>;
                    })
            }
</>
    )
})

export default ContainerWordsList;
