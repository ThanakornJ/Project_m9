import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

function LinkFooterSocial({ className, classIcon, toLink, nameLink }) {
    return (
        <div className={ className }>
            <div className="icon-social">
                <i className={ classIcon }></i>
            </div>
            <div className="link-social-content">
                <a href={ toLink } className="link__content">{ nameLink }</a>
            </div>
        </div>
    );
}

LinkFooterSocial.propTypes = {
    className: PropTypes.string.isRequired
}

export default styled(LinkFooterSocial)`
    display: flex;
    align-items: center;
    column-gap: .7rem;

    .icon-social {
        margin-top: .2rem;
        font-size: 1.2rem;
    }

    .facebook {
        color: #385898;
    }

    .ig {
        background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .twitter {
        color: #1DA1F2;
    }

    .linkedin {
        color: #2867B2;
    }

    .youtube {
        color: #FF0000;
    }

    .link-social-content a {
        color: rgba(0, 0, 0, 0.5);
        transition: all .2s ease-in;
    }

    .link-social-content a:hover {
        color: rgba(86, 226, 122, .7);
    }
`;