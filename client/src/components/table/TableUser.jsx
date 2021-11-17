import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import api from '../../api';
import { auth } from '../../auth/config.auth';

function TableUser({ className }) {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await api.get('/users/show', {
                    headers: auth()
                });

                if (res.status === 200) {
                    setUser(res.data);
                }
            } catch (error) {
                console.log(error);
            }
        }

        getUser();
    }, []);

    return (
        <div className={className}>
            <table className="table-style">
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Crete at</th>
                    <th>Update at</th>
                </tr>
            </thead>
            <tbody>
                { user.map((item) => {
                    return (
                        <tr key={item.accountID}>
                            <td>{item.accountID}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.creteAt.substring(0, 10)}</td>
                            <td>{item.updateAt.substring(0, 10)}</td>
                        </tr>
                    )
                }) }
            </tbody>
        </table>
        </div>
    );
}

TableUser.propTypes = {
    className: PropTypes.string.isRequired
}

export default styled(TableUser)`
    .table-style {
        border-collapse: collapse;
        margin: 25px 0;
        font-size: 0.9em;
        width: 100%;
        overflow: hidden;
        box-shadow: 0 0 2px .5px rgba(0, 0, 0, 0.15);
    }

    .table-style thead tr {
        background-color: rgba(86, 226, 122, .7);
        color: #ffffff;
        text-align: center;
        font-weight: bold;
        font-size: 1.1rem;       
    }

    .table-style th,
    .table-style td {
        padding: 12px 15px;
        text-align: center;
        font-size: 1rem;
    }

    .table-style tbody tr {
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

    .table-style tbody tr:last-of-type {
        border-bottom: 2px solid rgba(86, 226, 122, 1);
    }
`;