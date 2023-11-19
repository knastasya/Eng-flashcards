import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';
import logo from '../../images/logo.png';


export default function Header() {
    return (
        <nav>
            <ul className='nav-container'>
            <li>
            <Link to ='/' className='nav-container__link'>
                <div className='nav-container__logo-container'>
            <img src={logo} alt="logo" className='nav-container__logo'/>
            <p className='nav-container__logo-text'><span className='nav-container__logo-text nav-container__logo-text_eng'>ENG ———— </span> <br/> FLASHCARDS</p>
            </div>
            </Link>
            </li>
            <div className='nav-container__text'>
            <li>
                <Link to ='/words' className='nav-container__link'>ВСЕ СЛОВА</Link></li>
            <li>
                <Link to = '/practice' className='nav-container__link'>ТРЕНИРОВКА</Link></li>
            </div>
            
            </ul>
        </nav>
    )
}
