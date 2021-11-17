import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import TableFoods from '../table/TableFoods';


function FoodMain({ className }) {
    return (
        <main className={className}>
            <section className="header-controller">
                <div className="title-page">
                    <span>Foods Data</span>
                </div>
                <div className="controller-btn">
                    <Link to="/new-food" className="btn btn-add">
                        <span>New food</span>
                    </Link>
                </div>
            </section>
            <section className="table-content">
                <TableFoods />
            </section>
        </main>
    );
}

FoodMain.propTypes = {
    className: PropTypes.string.isRequired
}

export default styled(FoodMain)`
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
    
    .btn-add {
        color: #ffffff;
        background-color: rgba(86, 226, 122, 1);
        border-color: rgba(86, 226, 122, 1);
        cursor: pointer;
        transition: all 0.3s ease-in;
    }
    
    .btn-add:hover {
        background-color: rgba(86, 226, 122, .6);
    }
`;