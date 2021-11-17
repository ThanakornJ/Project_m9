import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function NavPolicy({ className }) {
    return (
        <ul className={ className }>
            <li className="list">
                <Link to="/" className="btn-link-privacy">
                    <small>Privacy Policy</small>
                </Link>
            </li>
            <li className="list">
                <Link to="/" className="btn-link-privacy">
                    <small>Terms and Policies</small>
                </Link>
            </li>
            <li className="list">
                <Link to="/" className="btn-link-privacy">
                    <small>Do Not Sell My Info</small>
                </Link>
            </li>
            <li className="list">
                <Link to="/" className="btn-link-privacy">
                    <small>AdChoices</small>
                </Link>
            </li>
        </ul>
    );
}

NavPolicy.propTypes = {
    className: PropTypes.string.isRequired
}

export default styled(NavPolicy)`
    list-style-type: none;
    display: flex;
    column-gap: 1.5rem;

    .list:nth-child(1), .list:nth-child(2), .list:nth-child(3) {
        border-right: 1px solid rgba(0, 0, 0, 0.2);
        padding-right: 1.2rem;
    }

    .list a {
        color: rgba(0, 0, 0, 0.4);
    }

    .list a:hover {
        color: rgba(0, 0, 0, 0.6);
    }
`