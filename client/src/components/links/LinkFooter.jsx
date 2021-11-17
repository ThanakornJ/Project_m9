import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function LinkFooter({ className, toLink, nameLink }) {
    return (
        <Link to={toLink} className={ className }>
            <span className="l-title">{ nameLink }</span>
        </Link>
    );
}

LinkFooter.propTypes = {
    className: PropTypes.string.isRequired,
    toLink: PropTypes.string.isRequired,
    nameLink: PropTypes.string.isRequired
}

export default styled(LinkFooter)`
    color: rgba(0, 0, 0, 0.5);
    transition: all .2s ease-in;

    :hover {
        color: rgba(86, 226, 122, .7);
    }
`;