import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import axios from "axios";

function SaveCaloriesDay({ className }) {
  const [calfood, setCalfood] = useState([]);
  const [calexercise, setCalexercise] = useState([]);

  useEffect(async () => {
    await axios
      .get("http://localhost:5050/api/save-food/show", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token_user"),
        },
      })
      .then((res) => {
        console.log(res);
        setCalfood(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        console.log(`555+`);
      });
  }, []);
  useEffect(async () => {
    await axios
      .get("http://localhost:5050/api/save-exercise/show", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token_user"),
        },
      })
      .then((res) => {
        console.log(res);
        setCalexercise(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        console.log(`555+`);
      });
  }, []);

  return (
    <div className={className}>
     
<div className="container">
      <table id="customers"> 
      <tr>
            <th>Menu</th>
            <th>Calories</th>
            <th>Unit</th>
            <th>Type</th>

          </tr>
        {calfood.map((food) => {
           
          return (
            <tr>
              <td>{food.food.food_name} </td>
              <td>{food.food.caloriesFood.calories_total} </td>
              <td>กิโลแคลอรี่</td>
              <td className="del"><button class="button">ลบ</button></td>

            </tr>
          );
          // <td>{p.ingredientName}</td>;
        })}
      </table>
      <table id="customers"> 
      <tr>
            <th>Exercise</th>
            <th>Calories</th>
            <th>Unit</th>
            <th>Type</th>

          </tr>
        {calexercise.map((p) => {
           
          return (
            <tr>
              <td>{p.exercise.exercise_name} </td>
              <td>{p.exercise.exercise_cal} </td>
              <td>กิโลแคลอรี่</td>
              <td className="del"><button class="button">ลบ</button></td>
            </tr>
          );
          // <td>{p.ingredientName}</td>;
        })}
      </table>
    </div>
    </div>
  );
}
SaveCaloriesDay.propTypes = {
  className: PropTypes.string.isRequired,
};
export default styled(SaveCaloriesDay)`
  * {
    margin: 0 auto;
  }
  .container{
      width: 1100px;
  }
  #customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
  width: 33%;
}
.button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
`;
