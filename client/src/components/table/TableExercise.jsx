import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert2';
import api from '../../api';
import { fetchExercise, deleteExercise } from '../../actions/exerciseAction';

export default function TableExercise({ className }) {
    const dispatch = useDispatch();
    const exercise = useSelector(state => state.exercise);

    useEffect(() => {
        const getExercise = async () => {
            try {
                const res = await api.get('/http://localhost:5050/api/exercise');

                if (res.status === 200) {
                    dispatch(fetchExercise(res.data));
                }
            } catch (error) {
                if (error.response) {
                    console.clear();
                    console.error(error.response);
                }
            }
        }
        getExercise();
    }, [dispatch]);

    const handleDelete = async () => {

    }

    return (
        <div className={className}>
            { exercise.length === 0
                ?
                <div className="loading-data">
                    
                </div> 
                :
                <table>
                    <thead>
                        <tr>
                            <th>Food ID</th>
                            <th>FooD Name</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        { exercise.data.map((exercise) => {
                            return (
                                <tr key={exercise.exerciseID}>
                                    <td>{exercise.exerciseName}</td>
                                    <td>{}</td>
                                    <td><i className='bx bx-edit i-edit'></i></td>
                                    <td><i className='bx bxs-trash i-delete' onClick={() => { handleDelete() }}></i></td>
                                </tr>
                            );
                        }) }
                    </tbody>
                </table>
            }
        </div>
    );
}
