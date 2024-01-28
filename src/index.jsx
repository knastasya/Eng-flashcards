import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';

import WordsStore from './assets/stores/WordsStore';

const wordsStore = new WordsStore()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App wordsStore = { wordsStore }/>
  </React.StrictMode>
)