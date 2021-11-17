import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import lodash from 'lodash';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../actions/userAction';
import api from '../../api';

function LoginForm({ className, setError }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });
    const { username, password } = inputs;

    const saveToStore = (token, username, typeAccountID) => {
        localStorage.setItem('token_user', token);
        localStorage.setItem('username_user', username);
        dispatch(fetchUser({ token, typeAccountID }));

        if (typeAccountID === 1) {
            history.push('/dashboard');
        } else {
            history.push('/');
        }
    }

    const handleChanged = (e) => {
        const { name, value } = e.target;
        setInputs((inputs) => ({ ...inputs, [name]: value }));
    }

    const handleSubmitted = async (e) => {
        e.preventDefault();
        try {
            const response = await api.get('/auth/login', {
                auth: {
                    username,
                    password
                }
            });

            if (response.status === 200) {
                saveToStore(response.data.token, response.data.username, response.data.typeAccountID);
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                console.clear();
                setError(error.response.data.message);
            }
        }
    }


    return (
        <form className={className} onSubmit={handleSubmitted}>
            <div className="f-item">
                <i className='bx bx-user-circle f-icon'></i>
                <input type="text" name="username" className="f-input" placeholder="username" onChange={handleChanged} autoComplete="off" value={username}/>
            </div>
            <div>
                <i className='bx bx-key f-icon'></i>
                <input type="password" name="password" className="f-input" placeholder="password" onChange={handleChanged} value={password} />
            </div>
            <div className="f-item link-group">
                <div>
                    <Link to="/" className="btn-link-control">Forget password?</Link>
                </div>
                <div>
                    <Link to="/sign-up" className="btn-link-control">Don't have an account?</Link>
                </div>
            </div>
            <div className="f-item btn-group">
                <button className={lodash.isEmpty(username) || lodash.isEmpty(password) ? 'btn btn-close' : 'btn btn-open'} disabled={lodash.isEmpty(username) || lodash.isEmpty(password)}>Sign in</button>
                <Link to="/" className="btn-link btn-back">Back</Link>
            </div>
        </form>
    );
}

LoginForm.propTypes = {
    className: PropTypes.string.isRequired,
    setError: PropTypes.func.isRequired
}

export default styled(LoginForm)`
    .f-item:nth-child(1),
    .f-item:nth-child(2) {
    margin-bottom: 1.5rem;
        position: relative;
    }
    
    .f-input {
        width: 100%;
        padding: 0.655rem;
        padding-left: 2.5rem;
        font-size: 1rem;
        border: 1px solid rgba(0, 0, 0, 0.3);
        outline: none;
    }
    
    .f-input:focus {
        border-color: rgba(86, 226, 122, .8);
    }

    .f-icon {
        position: absolute;
        font-size: 1.4rem;
        transform: translate(.5rem, .6rem);
    }

    .btn-group {
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        row-gap: 1rem;
    }

    .link-group {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: .3rem;
    }

    .btn-link-control {
        color: blue;
    }

    .btn {
        padding: 0.5rem;
        font-size: 1.112rem;
        border: 1px solid #000;
        outline: none;
        background-color: #ffffff;
        text-align: center;
        cursor: not-allowed;
        border-radius: 2px;
    }

    .btn-link {
        padding: 0.3rem;
        font-size: 1.112rem;
        border: 1px solid #ffffff;
        text-align: center;
        border-radius: 2px;
    }

    .btn-close {
        color: #ffffff;
        background-color: rgba(86, 226, 122, .6);
        border-color: rgba(86, 226, 122, .6);
        transition: all 0.3s ease-in;
    }

    .btn-open {
        color: #ffffff;
        background-color: rgba(86, 226, 122, 1);
        border-color: rgba(86, 226, 122, 1);
        cursor: pointer;
        transition: all 0.3s ease-in;
    }
    
    .btn-open:hover {
        background-color: rgba(86, 226, 122, .6);
    }

    .btn-back {
        color: #ffffff;
        background-color: rgba(255, 34, 85, 1);
        border-color: rgb(255, 34, 85);
        transition: all 0.3s ease-in;
    }

    .btn-back:hover {
        background-color: rgba(255, 34, 85, 0.7);
    }
`;