import React from 'react';
import logo from '../../images/bs-logo-symbol.svg';

export const Header = (props) => (<header className="header">
    <div className="logo-section">
        <figure>
            <img src={logo} className="BS-logo" alt="logo" />
        </figure>
        <h1>Best Secret News Reader</h1>
    </div>
    <div className={(props.toggleFilter) ? 'burguer change' : 'burguer'} onClick={() => props.handleShowFilters()} >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
    </div>
</header>);