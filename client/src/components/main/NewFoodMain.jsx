import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

import NewFoodForm from '../form/NewFoodForm';

function NewFoodMain({ className }) {
    return (
        <main className={className}>
            <section className="header-controller">
                <div className="title-page">
                    <span>Add New menu food</span>
                </div>
            </section>
            <section>
                <NewFoodForm />
            </section>
        </main>
    );
}

NewFoodMain.propTypes = {
    className: PropTypes.string.isRequired
}

export default styled(NewFoodMain)`
    padding-top: 2rem;
    padding-right: 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    margin-bottom: 2rem;

    .header-controller {
        display: flex;
        flex-direction: column;
        row-gap: 2rem;
    }
    
    .title-page {
        font-size: 2rem;
    }
`;