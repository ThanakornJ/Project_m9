import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert2';
import api from '../../api';
import { fetchFoods,  deleteFood } from '../../actions/foodAction';
import { Link } from 'react-router-dom';
import { auth } from '../../auth/config.auth';

function TableFoods({ className }) {
    const dispatch = useDispatch();
    const foods = useSelector(state => state.foods);

    useEffect(() => {
        const getFoods = async () => {
            try {
                const res = await api.get('/foods');

                if (res.status) {
                    dispatch(fetchFoods(res.data));
                }
            } catch (error) {
                if (error.response) {
                    console.clear();
                    console.error(error.response);
                }
            }
        }

        getFoods();
    }, [dispatch]);

    const handleDelete = async (foodID) => {
        try {
            const result = await swal.fire({
                toast: true,
                title: 'Delete Food',
                text: 'Do you want delete data?',
                icon: 'warning',
                showCancelButton: true,
                cancelButtonColor: '#f25',
                confirmButtonText: 'Delete'
            });

            if (result.isConfirmed) {
                const res = await api.delete('/foods/delete', {
                    headers: auth(),
                    params: {
                        id: foodID
                    }
                });

                if (res.status === 200) {
                    swal.fire({
                        title: 'Delete food',
                        text: res.data.message,
                        showConfirmButton: false,
                        icon: 'success',
                        timer: 1300,
                        toast: true
                    }).then(() => {
                        dispatch(deleteFood({ foodID: res.data.foodID }));
                    });
                }
            }
        } catch (error) {
            if (error.response) {
                console.clear();
            } else {
                console.error(error);
            }
        }
    }

    return (
        <div className={className}>
            { foods.length === 0
                ?
                <div className="loading-data">
                    
                </div> 
                :
                <table className="table-style">
                    <thead>
                        <tr>
                            <th>Food ID</th>
                            <th>FooD Name</th>
                            <th>Create at</th>
                            <th>Update at</th>
                            <th>Detail</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        { foods.map((food) => {
                            return (
                                <tr key={food.foodID}>
                                    <td>{food.foodID}</td>
                                    <td>{food.foodName}</td>
                                    <td>{food.creteAt.substring(0, 10)}</td>
                                    <td>{food.updateAt.substring(0, 10)}</td>
                                    <td><Link to="/"><i className="bx bx-detail"></i></Link></td>
                                    <td><i className='bx bx-edit i-edit'></i></td>
                                    <td><i className='bx bxs-trash i-delete' onClick={() => { handleDelete(food.foodID) }}></i></td>
                                </tr>
                            );
                        }) }
                    </tbody>
                </table>
            }
        </div>
    );
}

TableFoods.propTypes = {
    className: PropTypes.string.isRequired
}

export default styled(TableFoods)`
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

    .i-edit, .i-delete {
        font-size: 1.2rem;
        cursor: pointer;
    }

    .i-edit {
        color: yellow;
    }

    .i-delete {
        color: #f25;
    }
`;