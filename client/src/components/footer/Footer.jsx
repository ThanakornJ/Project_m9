import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import GroupItemFooter from '../group/GroupItemFooter';
import LinkFooter from '../links/LinkFooter';
import LinkFooterSocial from '../links/LinkFooterSocial';
import NavPolicy from '../nav/NavPolicy';

function Footer({ className }) {
    return (
        <footer className={ className }>
            <div className="container inner">
                <div className="content__information">
                    <div className="group_item">
                        <div className="name__app">
                            <span className="app__h-title"><span className="sub-app">A</span>vo</span>
                        </div>
                        <div className="description">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam obcaecati quas iusto? Dolor dolores reiciendis possimus eos, officiis ab corrupti suscipit pariatur repudiandae sapiente quaerat placeat ullam officia voluptas nobis?
                        </div>
                    </div>
                    <GroupItemFooter title="CUSTOMER SERVICE">
                        <LinkFooter toLink="/" nameLink="Help Centre" />
                        <LinkFooter toLink="/" nameLink="How to use" />
                        <LinkFooter toLink="/" nameLink="Blog" />
                    </GroupItemFooter>
                    <div className="group__item">
                        <div className="name__content">
                            <span className="h-title">CONTACT</span>
                        </div>
                    </div>
                    <GroupItemFooter title="SOCIAL MEDIA">
                        <LinkFooterSocial classIcon="bx bxl-facebook-circle icon-social facebook" toLink="/" nameLink="Facebook" />
                        <LinkFooterSocial classIcon="bx bxl-instagram icon-social ig" toLink="/" nameLink="Instagram" />
                        <LinkFooterSocial classIcon="bx bxl-twitter icon-social twitter" toLink="/" nameLink="Twitter" />
                        <LinkFooterSocial classIcon="bx bxl-linkedin-square icon-social linkedin" toLink="/" nameLink="Linkedin" />
                        <LinkFooterSocial classIcon="bx bxl-youtube youtube" toLink="/" nameLink="Youtube" />
                    </GroupItemFooter>
                </div>
                <div className="content__copy-right">
                    <div className="copy-right">
                        <small className="">© 2021 Avo. All Rights Reserved</small>
                    </div>
                    <div className="policy">
                        <NavPolicy />
                    </div>
                </div>
            </div>
        </footer>
    );
}

Footer.propTypes = {
    className: PropTypes.string.isRequired
}

export default styled(Footer)`
    /* position: absolute; */
    /* bottom: 0; */
    width: 100%;
    margin-top: 4rem;
    border-top: 1px solid rgba(86, 226, 122, 1);

    .container {
        padding: 1.5rem 1.5rem 0 1.5rem;
    }

    .inner {
        display: flex;
        flex-direction: column;
    }

    .content__information {
        display: flex;
        justify-content: space-around;
    }

    .group_item {
        width: 20rem;
    }

    .name__app {
        margin-bottom: 1.2rem;
    }

    .app__h-title {
        font-size: 1.5rem;
    }

    .sub-app {
        color: rgba(86, 226, 122, 1);
    }

    .description {
        color: rgba(0, 0, 0, .5);
    }

    .content__copy-right {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 2rem;
        padding-top: 4rem;
    }
`;