import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

import TableUser from '../table/TableUser';

function UserMain({ className }) {
    return (
        <main className={className}>
            <section className="header-controller">
                <div className="title-page">
                    <span>All User</span>
                </div>    
            </section>
            <section>
                <TableUser />
            </section>     
        </main>
    );
}

UserMain.propTypes = {
    className: PropTypes.string.isRequired
}

export default styled(UserMain)`
    padding-top: 2rem;
    padding-right: 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;

    .header-controller {
        display: flex;
        flex-direction: column;
        row-gap: 2rem;
    }
    
    .title-page {
        font-size: 2rem;
    }
`;