import React from 'react';
import { Link } from 'react-router-dom';

import './NotFoundPage.scss';
import cat from '../../images/404.png'


export default function NotFoundPage() {
    return (
<div className = "NotFoundPage">
    <h3 className = "NotFoundPage__title">Страница не найдена</h3>
            <img className = "NotFoundPage__img" src = { cat } alt = "Спящий кот на ноутбуке с экраном 404" />
            <p className = "NotFoundPage__away">Перейти к <Link to = "/" className = "NotFoundPage__link">выбору карточек →</Link></p>
</div>
    )
}
