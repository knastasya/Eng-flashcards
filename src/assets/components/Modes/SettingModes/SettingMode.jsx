import React from 'react';
import './SettingMode.scss';

import CategoryOfWords from './CategoryOfWords';

export default function SettingMode() {
    return (
<div className = "SettingMode">
            <h1>Карточки английских слов c переводом</h1>
            <p>Перед вами наборы карточек английских слов, с разбивкой по темам, которые помогут вам изучать английский язык и запоминать новые английские слова. Тренажер содержит готовую базу словарей с возможностью выбора необходимой категории обучающего материала. Обучение происходит в интерактивной форме. Блок тренировки содержит примеры на английском языке, транскрипцию и перевод. Программа оснащена функцией повторения и сортировки слов по уровням знаю/не знаю, чтобы оценивать процесс усвоения знаний и восполнть недочеты. </p>
            <div className = "SettingMode__category">
                <CategoryOfWords/>
                <CategoryOfWords/>
                <CategoryOfWords/>
                <CategoryOfWords/>
                <CategoryOfWords/>
                <CategoryOfWords/>
                <CategoryOfWords/>
                <CategoryOfWords/>
            </div>
        </div>
    )
}