import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryOfWords.scss';

import picture from '../../../images/background-category.jpg';

export default function CategoryOfWords() {
    return (
    <section className = "CategoryOfWords">
        <Link to = '/practice'>
            <img src = { picture } alt = "Заставка карточки" />
            <h3>Тема</h3></Link>
    </section>
    )
}