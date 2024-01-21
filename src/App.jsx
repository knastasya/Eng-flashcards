import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import Header from './assets/components/Header/Header';
import SettingMode from './assets/components/Modes/SettingModes/SettingMode';
import PracticeMode from './assets/components/Modes/PracticeModes/PracticeMode';
import ContainerWordsList from './assets/components/Modes/WordsListModes/ContainerWordList';
import NotFoundPage from './assets/components/Error/NotFoundPage';
import WordsContext from './assets/providers/WordsContext';
import Error from './assets/components/Error/Error';
import Loader from './assets/components/Loader/Loader';

import './App.scss';

export default function App() { 

  const [wordsAPI, setWordsAPI] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [needRefresh, setNeedRefresh] = useState(false);

  const refreshWordsAPI = () => {
    fetch( '/api/words' )
        .then( response => {
            if( response.ok ){
                return response.json();
            } else{
                throw new Error('Ошибка выполнения запроса к серверу');
            }})
        .then( response  => {
            setWordsAPI( response );
            setTimeout( () => setIsLoading(false), 500 );
        }
        )
        .catch(error => {
            setError(error);
            setTimeout( () => setIsLoading(false), 500 );
        });
};

const getLoader = param => {
  setIsLoading(param);
};

useEffect( () => {
  refreshWordsAPI();
}, [needRefresh]);

if(error) {
  return <Error name = {error.name} message = {error.message}/>;
}

  return (
  <>
  <CSSTransition in = { isLoading } timeout = {1000} classNames = "Loader" mountOnEnter unmountOnExit >
    <Loader/> 
  </CSSTransition>

  <WordsContext.Provider value = {[ wordsAPI, needRefresh, setNeedRefresh, getLoader ]}>
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
    </WordsContext.Provider>
  </>
)
}


