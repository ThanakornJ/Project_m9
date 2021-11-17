import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { Link, NavLink } from "react-router-dom";

// import 'bootstrap/dist/css/bootstrap.min.css';
function Ext({ className }) {
  const [posts, setPosts] = useState([]);
  // const [searchText, setSearchText] = useState("");
  const [cal, setCal] = useState("");
  const [name, setName] = useState("");
  const [id_workoutx, setId_workout] = useState(1);
  const [search, setSearch] = useState("");
  const [saveExercise, setSaveExercise] = useState("");
  const [target, setTarget] = useState(0);

  useEffect(async () => {
    await axios
      .get("http://localhost:5050/api/exercise")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
        console.log(posts);
       
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  
  const fillterExercises = posts.filter((exercise) => {
    return exercise.exerciseName.includes(search);
  });
  function bttdel(e, id) {
    e.preventDefault();
    axios
      .delete(`http://localhost:5050/api/exercise/delete?id=${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token_user"),
        },
      })
      window.location.reload();
      
  }
  return (
    <div className={className}>

      <div className="container">
        <div className="Area">
          <table className="table-style">
            <thead>
              <tr>
              <th>ID</th>
              <th>ExerciseName</th>
              <th>Calories</th>
              <th>Create ta</th>
              <th>Update at</th>
              <th>Edit</th>
              <th>Delete</th>
              </tr>
            </thead>
            {fillterExercises.map((post) => (
              <tr>
                <td>{post.exerciseID}</td>
                <td>{post.exerciseName}</td>

                <td>{post.exerciseCalories}</td>
                <td>{post.creteAt.substring(0, 10)}</td>
                <td>{post.updateAt.substring(0, 10)}</td>
                <td>
                  <i className="bx bx-edit i-edit"></i>
                </td>
                <td>
                  <i className="bx bxs-trash i-delete"  onClick={(e) => {
            bttdel(e, (post.exerciseID));
          }}></i>
         
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}
Ext.propTypes = {
  className: PropTypes.string.isRequired,
};
export default styled(Ext)`
  * {
    font-size: cal(60%+0.8vmin);
    margin: 0 auto;
  }
  #customers {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  #customers td,
  #customers th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  #customers tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  #customers tr:hover {
    background-color: #ddd;
  }

  #customers th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #04aa6d;
    color: white;
  }
  .table-style {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    width: 100%;
    overflow: hidden;
    box-shadow: 0 0 2px 0.5px rgba(0, 0, 0, 0.15);
  }

  .table-style thead tr {
    background-color: rgba(86, 226, 122, 0.7);
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

  .i-edit,
  .i-delete {
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
