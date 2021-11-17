import React, { useState } from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import lodash from 'lodash';

import RegisterForm from '../form/RegisterForm';

import logo from '../../assets/images/logo.svg';

function RegisterMain({ className }) {
    const [error, setError] = useState('');

    return (
        <main className={className}>
            <section>
                <div className="content">
                    <div className="content-header">
                        <div className="image-logo">
                            <div className="image__group">
                                <img src={ logo } alt="logo" />
                            </div>
                        </div>
                        <div>
                            <span>Create new account</span>
                        </div>
                    </div>
                    { !lodash.isEmpty(error) 
                    ? 
                    <div className="content-error">
                        <div className="icon-error">
                            <i className="bx bx-error-circle"></i>
                        </div>
                        <div className="title-error">
                            <span>{ error }</span>
                        </div>
                    </div>
                    : <></>
                    }
                    <RegisterForm setError={setError} />
                </div>
            </section>
        </main>
    )
}

RegisterMain.propTypes = {
    className: PropTypes.string.isRequired
}

export default styled(RegisterMain)`
    display: flex;
    justify-content: center;
    margin-top: 4rem;


    .content {
        width: 400px;
        padding: 2rem;
        box-shadow: 3px 4px 5px 0.3px rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(0, 0, 0, 0.1);
    }

    .content-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: .7rem;
    }

    .image-logo {
        margin-bottom: 1rem;
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

    .content-header span {
        font-size: 1.4rem;
    }

    .content-error {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #f25;
        padding: .3rem;
        column-gap: .7rem;
        box-shadow: 0 0 2px 0.3px rgba(255, 34, 85, 0.5);
        margin-bottom: .7rem;
    }

    .icon-error {
        color: #f25;
        font-size: 1.3rem;
    }

    .icon-error i {
        margin-top: 0.3rem;
    }

    .title-error {
        font-size: 1.1rem;
    }
`;