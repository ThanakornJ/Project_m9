import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';


function ScrollToTop({ history, children }) {
    useEffect(() => {
        const unListen = history.listen(() => {
            window.scrollTo(0, 0);
        });

        return () => {
            unListen();
        }
    }, [history]);

    return <Fragment>{ children }</Fragment>
}

ScrollToTop.propTypes = {
    children: PropTypes.node.isRequired
}

export default withRouter(ScrollToTop);