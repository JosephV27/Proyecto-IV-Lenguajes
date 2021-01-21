import React from 'react';
import luikiKart from '../images/luikiKart_logo.jpeg';
import './styles/MainPage.css'

function MainPage() {
    return (
        <div className="main_page">
            <h2 className="entry-title">Bienvenido a Luiki Kart!!!</h2>
            <img src={luikiKart} height="840" alt="main logo"/>
        </div>
    );
}

export default MainPage;