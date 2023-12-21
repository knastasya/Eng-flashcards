import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './assets/components/Header/Header';
import SettingMode from './assets/components/Modes/SettingModes/SettingMode';
import PracticeMode from './assets/components/Modes/PracticeModes/PracticeMode';
import ContainerWordsList from './assets/components/Modes/WordsListModes/ContainerWordList';
import NotFoundPage from './assets/components/Error/NotFoundPage';
import './App.scss';

export default function App() { 

  return (
    <>
<Router>
  <header>
    <Header/>
  </header>
  <main className='main-container'>
    <Routes>
      <Route path = "/" element = { <SettingMode/> }/>
      <Route path = "/words" element = { <ContainerWordsList/> }/>
      <Route path = "/practice" element = { <PracticeMode/> }/>
      <Route path = "*" element = { <NotFoundPage/> } />
    </Routes>
  </main>
</Router>
</>
  )
}


