import React from 'react';
import WordsList from './WordsList';
import HeaderList from './HeaderList';
import data from '../../../data/data.json';

export default function ContainerWordsList() {
    return(
<>
<HeaderList/>

{data.map((data, index) =>
    <WordsList
    key={index} {...data}/>
    )}
</>
    )
}

