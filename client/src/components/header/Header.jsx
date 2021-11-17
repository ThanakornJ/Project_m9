import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import lodash from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert2';
import api from '../../api';
import { fetchUser, deleteUser } from '../../actions/userAction'; 
import logo from '../../assets/images/logo.svg';

function Header({ className }) {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const [error, setError] = useState('');
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [errorInputs, setErrorInputs] = useState({
        username: false,
        password: false
    });
    const { username, password } = inputs;

    const saveToStore = (token, username, typeAccountID) => {
        localStorage.setItem('token_user', token);
        localStorage.setItem('username_user', username);
        dispatch(fetchUser({ token, typeAccountID }));
    }
    
    const deleteForStore = async () => {
        localStorage.removeItem('token_user');
        localStorage.removeItem('username_user');
        dispatch(deleteUser());
    }

    const handleChange = (e) => {
        const { value, name } = e.target;
        setInputs((inputs) => ({ ...inputs, [name]: value }));
    }

    const handleSubmitted = async (e) => {
        e.preventDefault();
        setSubmitted(true);

        if (lodash.isEmpty(username)) {
            setErrorInputs((errorInputs) => ({ ...errorInputs, username: true }));
            setError('Please fill your username');
        } else if (lodash.isEmpty(password)) {
            setErrorInputs((errorInputs) => ({ ...errorInputs, password: true }));
            setError('Please fill your password');
        } else {
            try {
                const response = await api.get('/auth/login', {
                    auth: {
                        username,
                        password
                    }
                });

                if (response.status === 200) {
                    setInputs({ username: '', password: '' });
                    saveToStore(response.data.token, response.data.username, response.data.typeAccountID);
                }
            } catch (error) {
                if (error.response.status === 400) {
                    console.clear();
                    setError(error.response.data.message);
                }
            }
        }
    }

    const handleSignOut = async () => {
        const result = await swal.fire({
            toast: true,
            title: 'Sign out',
            text: 'Do you want sign out?',
            icon: 'question',
            showCancelButton: true,
            cancelButtonColor: '#f25',
            confirmButtonText: 'Sign out'
        });

        if (result.isConfirmed) {
            deleteForStore();
        }
    }

    return (
        <header className={ className }>
            <div className="logo__page">
                <div className="content__logo">
                    <div className="content-image__logo">
                        <div className="image__group">
                            <img src={ logo } alt="logo" />
                        </div>
                    </div>
                    <div className="content-title__logo">
                        <span className="h-title">A<span className="s-title">vo</span></span>
                    </div>
                </div>
            </div>
            <div className="nav__bar">
                
            </div>
            <div className="control__page">
                { !lodash.isEmpty(user) 
                ?
                <div>
                    <div className="group-item">
                        <h3>{username}</h3>
                        <Link to="/sign-out" className="btn btn-sign__in" onClick={handleSignOut}>Sign out</Link>
                    </div>
                </div>
                :
                <div className="content__control">
                    <div className="group__item">
                        <div className="position__group">
                            <Link to="/sign-in" className="btn btn-sign__in">Sign in</Link>
                            <div className="popup__sign-in">
                                <div className="title__popup">
                                    <span>Welcome to <span className="h-title">A</span>vo</span>
                                </div>
                                { !lodash.isEmpty(error) 
                                ? 
                                <div className="error-popup">
                                    <div className="icon-error">
                                        <i className='bx bx-error-circle i-error'></i>
                                    </div>
                                    <div className="error-title">
                                        <span>{error}</span>
                                    </div>
                                </div> 
                                : <></>}
                                <form className="form__popup" onSubmit={ handleSubmitted }>
                                    <div className="f-box">
                                        <input type="text" name="username" className={submitted && errorInputs.username ? 'f-input f-error' : 'f-input'} placeholder="Username" autoComplete="off" onChange={handleChange} value={inputs.username} />
                                        <i className="bx bx-user-circle i-user"></i>
                                        { submitted && errorInputs.username ? 
                                            <i className="bx bx-x-circle i-x-error"></i>
                                        : <></> }
                                    </div>
                                    <div className="f-box">
                                        <input type="password" name="password" className={submitted && errorInputs.password ? 'f-input f-error' : 'f-input'} placeholder="Password" onChange={handleChange} value={inputs.password} />
                                        <i className="bx bx-key i-key"></i>
                                        { submitted && errorInputs.password ? 
                                            <i className="bx bx-x-circle i-x-error"></i>
                                        : <></> }
                                    </div>
                                    <div className="f-box">
                                        <button className="b-btn">Sign in</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="group__item">
                        <Link to="/sign-up" className="btn btn-sign__up">Sign <span className="h-title">up</span></Link>
                    </div>
                </div>
                }
            </div>
        </header>
    );
}

Header.propTypes = {
    className: PropTypes.string.isRequired
}

export default styled(Header)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem 3rem;
    border-bottom: 1px solid rgba(86, 226, 122, 1);
    box-shadow: 0 3px 3px .1px rgba(86, 226, 122, .1);
    /* margin-bottom: 5rem; */

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

    .group__item:nth-child(1) {
        border-right: 1px solid rgba(0, 0, 0, .2);
        padding-right: 1rem;
    }

    .position__group {
        position: relative;
    }

    .position__group:hover ~ .popup__sign-in {
        opacity: 1;
        visibility: visible;
    }

    .btn {
        position: relative;
        font-size: 1.3rem;
        transition: all .3s;
        letter-spacing: .5px;
    }

    .b-btn {
        width: 100%;
        padding: .5rem;
        border: 1px solid rgba(86, 226, 122, .7);
        background-color: rgba(86, 226, 122, .7);
        font-size: 1rem;
        color: #ffffff;
        cursor: pointer;
        outline: none;
        transition: .3s ease-in-out;
    }

    .b-btn:hover {
        background-color: rgba(86, 226, 122, 1);
    }

    .btn-sign__in, .btn-sign__up {
        color: #000000;
    }

    .btn-sign__in:hover {
        color: rgba(86, 226, 122, 1);
    }

    .btn-sign__up:hover::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 3px;
        bottom: -5px;
        border-radius: 50px;
        background-color: rgba(86, 226, 122, .5);
        box-shadow: 0 0 2px .2px rgba(86, 226, 122, .5);
        animation: bar .3s ease-in-out;
    }

    .popup__sign-in {
        position: absolute;
        display: flex;
        flex-direction: column;
        row-gap: .8rem;
        width: 300px;
        box-shadow: 0 0 8px rgb(0 0 0 / 15%);
        padding: .8rem;
        border-radius: 5px;
        background-color: #ffffff;
        top: 2.3rem;
        left: -6.5rem;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.2s linear, visibility 0.2s linear;
        z-index: 3;
    }

    .btn-sign__in:hover ~ .popup__sign-in {
        opacity: 1;
        visibility: visible;
    }

    .popup__sign-in:hover {
        opacity: 1;
        visibility: visible;
    }

    .title__popup {
        font-size: 1.5rem;
        margin-bottom: .8rem;
        text-align: center;
    }

    .error-popup {
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: .6rem;
        color: #f25;
    }

    .i-error {
        padding-top: .3rem;
        font-size: 1.1rem;
    }

    .f-box:nth-child(1), .f-box:nth-child(2) {
        position: relative;
    }

    .i-user, .i-key {
        position: absolute;
        left: 10px;
        top: 7.8px;
        font-size: 1.3rem;
    }

    .i-x-error {
        position: absolute;
        right: 8px;
        font-size: 1.2rem;
        top: 9.5px;
        color: rgba(255, 34, 85, .8);
    }

    .form__popup {
        display: flex;
        flex-direction: column;
        row-gap: .8rem;
    }

    .f-input {
        padding: .5rem;
        padding-left: 2.5rem; 
        width: 100%;
        font-size: 1rem;
        border: 1px solid rgba(0, 0, 0, .2);
        border-radius: 50px;
        outline: none;
    }

    .f-input:focus {
        border-color: rgba(86, 226, 122, 1);
    }

    .f-error, .f-error:focus {
        border-color: rgba(255, 34, 85, .5);
        box-shadow: 0 0 3px .3px rgba(255, 34, 85, .8);
    }

    @keyframes bar {
        0% {
            width: 0;
        }
        100% {
            width: 100%;
        }
    }
`;