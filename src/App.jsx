import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './assets/components/Header/Header';
import WordsList from './assets/components/Modes/WordsListModes/WordsList';
import HeaderList from './assets/components/Modes/WordsListModes/HeaderList';
import SettingMode from './assets/components/Modes/SettingModes/SettingMode';
import PracticeMode from './assets/components/Modes/PracticeModes/PracticeMode';
import data from './assets/data/data.json'
import './App.scss';

export default function App() { 

  return (
    <>
<Router>
<Header/>
    <Routes>
      <Route path = "/" element = { <SettingMode/>}/>
      <Route path = "/words" element = { <WordsList/> }/>
      <Route path = "/practice" element = { <PracticeMode/> }/>
    </Routes>
</Router>

<HeaderList/>

{data.map((data, index) =>
      <WordsList
      key={index}
      english={data.english}
      transcription={data.transcription}
      russian={data.russian}
      ></WordsList>)
      }
</>
  )
}


