import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function GroupItemFooter({ className, title, children }) {
    return (
        <div className={className}>
            <div className="group_title">
                <span className="h-title">{ title }</span>
            </div>
            <div className="group_list">
                { children }
            </div>
        </div>
    );
}

GroupItemFooter.propTypes = {
    className: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default styled(GroupItemFooter)`
    .group_title {
        margin-bottom: 1.2rem;
    }

    .group_list {
        display: flex;
        flex-direction: column;
        row-gap: .8rem;
    }
`;