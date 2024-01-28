import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { observer } from 'mobx-react-lite';

import Header from './assets/components/Header/Header';
import SettingMode from './assets/components/Modes/SettingModes/SettingMode';
import PracticeMode from './assets/components/Modes/PracticeModes/PracticeMode';
import ContainerWordsList from './assets/components/Modes/WordsListModes/ContainerWordList';
import NotFoundPage from './assets/components/Error/NotFoundPage';
import Error from './assets/components/Error/Error';
import Loader from './assets/components/Loader/Loader';

import './App.scss';

const App = observer(( props ) => { 
  const wordsStore = props.wordsStore;

  useEffect(() => wordsStore.refreshWordsAPI(),
  [ wordsStore.needRefresh ]);

  if( wordsStore.error ){
    return <Error name = { wordsStore.error.name } message = { wordsStore.error.message }/>;
}

  return (
    <>
<CSSTransition in = { wordsStore.isLoading } timeout = {1000} classNames = "Loader" mountOnEnter unmountOnExit >
  <Loader/> 
</CSSTransition> 

<Router>
  <header>
    <Header/>
  </header>
  <main className='main-container'>
    <Routes>
      <Route path = "/" element = { <SettingMode/> }/>
      <Route path = "/words" element = { <ContainerWordsList wordsStore = { wordsStore }/> }/>
      <Route path = "/practice" element = { <PracticeMode wordsStore = { wordsStore }/> }/>
      <Route path = "*" element = { <NotFoundPage/> } />
    </Routes>
  </main>
</Router>
</>
  )
})

export default App;


