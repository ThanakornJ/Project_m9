import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import swal from 'sweetalert2';
import api from '../../api';
import { auth } from '../../auth/config.auth';

function NewFoodForm({ className }) {
    const [foodName, setFoodName] = useState('');
    const [foodImage, setFoodImage] = useState('');
    const [number, setNumber] = useState(1);
    const [ingredients, setIngredients] = useState([{
        ingredientName: '',
        quantityGram: 0,
        ingredientTypeID: 0
    }]);

    const handleAdd = () => {
        const count = number + 1;
        const newIngredient = [
            ...ingredients, 
            { 
                ingredientName: '',
                quantityGram: 0,
                ingredientTypeID: 0 
            }
        ]
        setNumber(count);
        setIngredients(newIngredient);
    }

    const handleChanged = (e, index) => {
        const { name, value } = e.target;
        ingredients[index][name] = value;
        setIngredients([...ingredients]);
    }

    const handleRemove = (index) => {
        const count = number - 1;
        ingredients.splice(index, 1);
        setNumber(count);
        setIngredients([...ingredients]);
    }

    console.log(ingredients);

    const handleSubmitted = async (e) => {
        e.preventDefault();
        const result = await swal.fire({
            title: 'Create new menu food',
            text: 'Do you want create new menu food?',
            icon: 'question',
            showCancelButton: true,
            cancelButtonColor: '#f25',
            confirmButtonText: 'Add'
        });

        if (result.isConfirmed) {
            try {
                const res = await api.post('/foods/create', {
                    food: {
                        foodName: foodName,
                        foodImage: foodImage
                    },
                    ingredients
                }, {
                    headers: auth()
                });

                if (res.status === 200) {
                    swal.fire({
                        title: 'Add new food menu',
                        text: res.data.message,
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1300,
                        toast: true
                    });
                }
            } catch (error) {
                if (error.response && error.response.status === 400) {
                    swal.fire('Error', error.response.data.message, 'error');
                }
            }
        }
    }

    return (
        <div className={className}>
            <form className="form-content" onSubmit={handleSubmitted}>
                <div className="content-group">
                    <div className="title-content">
                        <span className="header-title">Food name</span>
                    </div>
                    <div className="control-content">
                        <input type="text" className="input-f" placeholder="Please enter food name" onChange={(food) => { setFoodName(food.target.value) }} value={foodName} />
                    </div>
                </div>
                <div className="content-group">
                    <div className="title-content">
                        <span className="header-title">Food image</span>
                    </div>
                    <div className="control-content">
                        <input type="text" className="input-f" placeholder="Please enter url image" onChange={(image) => { setFoodImage(image.target.value) }} value={foodImage} />
                    </div>
                </div>
                <div className="content-group">
                    <div className="item-btn">
                        <button type="button" className="btn-add-ingredient" onClick={handleAdd}>New ingredient</button>
                    </div>
                    <div className="item-add-group">
                    { [...Array(number)].map((item, index) => {
                        return (
                            <div className="ingredient-group" key={index}>
                                <div className="btn-group-remove">
                                    <span className="btn-remove" onClick={() => { handleRemove(index) }}>Remove item</span>
                                </div>
                                <div className="content-group">
                                    <div className="title-content">
                                        <span className="header-title">Ingredient name</span>
                                    </div>
                                    <div className="control-content">
                                        <input type="text" name="ingredientName" className="input-f" placeholder="Please enter ingredient name" onChange={(ingredientName) => { handleChanged(ingredientName, index) }} value={ingredients[index].ingredientName} />
                                    </div>
                                </div>
                                <div className="content-group">
                                    <div className="title-content">
                                        <span className="header-title">Quantity gram</span>
                                    </div>
                                    <div className="control-content">
                                        <input type="text" name="quantityGram" className="input-f" placeholder="Please enter quantity gram" onChange={(quantityGram) => { handleChanged(quantityGram, index) }} value={ingredients[index].quantityGram} />
                                    </div>
                                </div>
                                <div className="content-group">
                                    <div className="title-content">
                                        <span className="header-title">Ingredient type</span>
                                    </div>
                                    <div className="control-content">
                                        <select name="ingredientTypeID" className="input-f" onChange={(ingredientType) => { handleChanged(ingredientType, index) }} value={ingredients[index].ingredientTypeID}>
                                            <option value="0">Select ingredient type</option>
                                            <option value="1" selected="selected">Protein</option>
                                            <option value="2">Carbohydrate</option>
                                            <option value="3">Fat</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        );
                    }) }
                    </div>
                </div>
                <div className="content-group btn-group">
                    <button className="btn-add-ingredient">Add menu</button>
                </div>
            </form>
        </div>
    );
}

NewFoodForm.propTypes = {
    className: PropTypes.string.isRequired
}

export default styled(NewFoodForm)`
    .form-content {
        margin-top: 1rem;
        border: 1px solid rgba(0, 0, 0, .1);
        box-shadow: 2px 3px 3px .1px rgba(0, 0, 0, .1);
        border-radius: 5px;
        padding: 2rem;
    }

    .title-content {
        margin-bottom: .5rem;
    }

    .control-content {
        margin-bottom: 1rem;
        width: 100%;
    }
    .header-title {
        font-size: 1.5rem;
    }

    .list-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .input-f {
        padding: .6rem;
        font-size: 1.2rem;
        border: 1px solid rgba(0, 0, 0, .1);
        width: 100%;
        outline: none;
    }

    .input-f:focus {
        border-color: rgba(86, 226, 122, 1);
        box-shadow: 0 0 3px .2px rgba(86, 226, 122, .5);
    }

    .item-add-group {
        margin-top: 1rem;
        border: 1px solid rgba(0, 0, 0, .1);
        box-shadow: 2px 3px 3px .1px rgba(0, 0, 0, .1);
        border-radius: 5px;
        padding: 2rem;
    }

    .ingredient-group {
        position: relative;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border: 1px solid rgba(0, 0, 0, .1);
        border-radius: 5px;
        padding: 1rem;
        margin-bottom: 1rem;
    }

    .btn-add-ingredient {
        padding: 0.5rem;
        font-size: 1.112rem;
        border: 1px solid #000;
        outline: none;
        background-color: #ffffff;
        text-align: center;
        border-radius: 2px;
        color: #ffffff;
        background-color: rgba(86, 226, 122, 1);
        border-color: rgba(86, 226, 122, 1);
        cursor: pointer;
        transition: all 0.3s ease-in;
    }

    .btn-add-ingredient:focus {
        background-color: rgba(86, 226, 122, .6);
    }

    .btn-group {
        margin-top: 2rem;
    }

    .btn-group-remove {
        position: relative;
    }

    .btn-remove {
        color: #f25;
        font-size: 1rem;
        cursor: pointer;
    }

    .btn-remove:hover {
        text-decoration: underline;
    }
`;