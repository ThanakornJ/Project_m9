import React from 'react';

function HeaderAdmin() {
    const handleToggle = () => {
        const toggle = document.getElementById('header-toggle');
        const bodyPD = document.getElementsByClassName('dashboard')[0];
        const header = document.getElementById('header');
        const nav = document.getElementById('nav-bar');

        if (toggle && bodyPD && header && nav) {
            nav.classList.toggle('show');
            toggle.classList.toggle('bx-x');
            bodyPD.classList.toggle('body-pd');
            header.classList.toggle('body-pd');
        }
    }

    return (
        <header className="header" id="header">
            <div className="header__toggle">
                <i className="bx bx-menu" id="header-toggle" onClick={handleToggle}></i>
            </div>
        </header>
    );
}

export default HeaderAdmin;