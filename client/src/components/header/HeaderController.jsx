import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';

function HeaderController({ className, titlePage }) {
    return (
        <header className={  className }>
            <div className="content__logo">
                <div className="content-image__logo">
                    <div className="image__group">
                        <img src={ logo } alt="logo" />
                    </div>
                </div>
                <div className="content-title__logo">
                    <Link to="/">
                        <span className="h-title">A<span className="s-title">vo</span></span>
                    </Link>
                </div>
            </div>
            <div className="content-title">
                <span>{titlePage}</span>
            </div>
        </header>
    );
}

HeaderController.propTypes = {
    className: PropTypes.string.isRequired
}

export default styled(HeaderController)`
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 1.5rem;
    background-color: #fff;
    border-bottom: 1px solid rgba(86, 226, 122, 1);
    box-shadow: 0 3px 3px .1px rgba(86, 226, 122, .1);
    column-gap: 1.5rem;

    .content__logo, .content__control {
        display: flex;
        align-items: center;
        column-gap: 1rem;
    }

    .image__group {
        position: relative;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        padding: 1.8rem;
        border-radius: 50%;
        background-color: rgba(86, 226, 122, 1);
        transform: translateY(.1rem);
    }

    .image__group img {
        width: 40px;
        height: 40px;
    }

    .content-title__logo {
        font-size: 1.7rem;
        letter-spacing: 1px;
    }

    .h-title {
        color: rgba(86, 226, 122, 1);
    }

    .s-title {
        color: #000000;
    }

    .content-title {
        display: flex;
        justify-self: center;
        align-items: center;
    }

    .content-title span {
        font-size: 1.5rem;
        padding-top: .2rem;
    }
`;