import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import lodash from 'lodash';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import swal from 'sweetalert2';
import api from '../../api';

function RegisterForm({ className, setError }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        password: '',
        confirm_password: ''
    });
    const { username, email, password, confirm_password } = inputs;
    
    const handleChanged = (e) => {
        const { name, value } = e.target;
        setInputs((inputs) => ({ ...inputs, [name]: value }));
    }

    const handleSubmitted = async (e) => {
        e.preventDefault();
        const result = await swal.fire({
            title: 'Sign up',
            text: 'Do you want create new account?',
            icon: 'question',
            showCancelButton: true,
            cancelButtonColor: '#f25',
            confirmButtonText: 'Sign up'
        });

        if (result.isConfirmed) {
            if (password !== confirm_password) {
                setError('password do not match');
            } else {
                try {
                    const response = await api.post('/auth/register', {
                        username,
                        email,
                        password
                    });

                    if (response.status === 200) {
                        swal.fire({
                            title: 'Sign up',
                            text: response.data.message,
                            icon: 'success',
                            showConfirmButton: false,
                            timer: 1300,
                            toast: true
                        }).then(() => {
                            history.push('/sign-in');
                        });
                    }
                } catch (error) {
                    if (error.response && error.response.status === 400) {
                        console.clear();
                        setError(error.response.data.message);
                    }
                }
            }
        }
    }

    return (
        <form className={className} onSubmit={handleSubmitted}>
            <div className="f-item">
                <i className='bx bx-user-circle f-icon'></i>
                <input type="text" name="username" className="f-input" placeholder="username" onChange={handleChanged} autoComplete="off" value={username}/>
            </div>
            <div className="f-item">
                <i className='bx bx-envelope f-icon'></i>
                <input type="text" name="email" className="f-input" placeholder="email" onChange={handleChanged} autoComplete="off" value={email}/>
            </div>
            <div className="f-item">
                <i className='bx bx-key f-icon'></i>
                <input type="password" name="password" className="f-input" placeholder="password" onChange={handleChanged} autoComplete="off" value={password}/>
            </div>
            <div>
                <i className='bx bx-key f-icon'></i>
                <input type="password" name="confirm_password" className="f-input" placeholder="confirm password" onChange={handleChanged} value={confirm_password} />
            </div>
            <div className="f-item btn-group">
                <button className={lodash.isEmpty(username) || lodash.isEmpty(password) || lodash.isEmpty(email) || lodash.isEmpty(confirm_password) ? 'btn btn-close' : 'btn btn-open'} disabled={lodash.isEmpty(username) || lodash.isEmpty(password) || lodash.isEmpty(email) || lodash.isEmpty(confirm_password) }>Sign up</button>
                <Link to="/" className="btn-link btn-back">Back</Link>
            </div>
        </form>
    );
}

RegisterForm.propTypes = {
    className: PropTypes.string.isRequired,
    setError: PropTypes.func.isRequired
}

export default styled(RegisterForm)`
    .f-item:nth-child(1),
    .f-item:nth-child(2),
    .f-item:nth-child(3),
    .f-item:nth-child(4) {
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