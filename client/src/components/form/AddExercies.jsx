import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import axios from "axios";
function AddExercise({ className }) {
  const [name, setName] = useState("");
  const [urlpic, setUrlpic] = useState("");
  const [urlvideo, setUrlvideo] = useState("");
  const [description, setDescription] = useState("");
  const [set, setSet] = useState("");
  const [amount, setAmount] = useState(1);
  const [calorie, setCalorie] = useState(0);
  const [exercise, setExercise] = useState("");
  const [re, setRe] = useState("");

  const addExercise = () => {
    console.log(name);
    console.log(urlpic);
    console.log(urlvideo);
    console.log(description);
    console.log(set);
    console.log(amount);
    console.log(calorie);
    // console.log(exercise);
    axios
      .post(
        "http://localhost:5050/api/exercise/create",
        {
          exerciseName: name,
          exerciseCalories: parseFloat(calorie),
          amount: amount,
          img: urlpic,
          video: urlvideo,
          description: description,
          exercise: exercise,
          set: set,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token_user"),
          },
        }
      )
      .then(() => [
        ...exercise,
        {
          exerciseName: name,
          img: urlpic,
          video: urlvideo,
          description: description,
          amount: amount,
          exerciseCalories: calorie,
          exercise: exercise,
          set: set,
        },
      ]).then(()=>{
        window.location.reload();
      })
      
      .catch((err) => {
        console.log(err.response);
      });
  };
  useEffect(async () => {
    await axios
      .get("http://localhost:5050/api/exercise")
      .then((res) => {
        console.log(res);
        setRe(res.data);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className={className}>
    
        <form className="form-area">
        <div className="container w-25">
          <h1 className="title">?????????????????????????????????????????????????????????</h1>
          <div class="form-floating mb-3">
            <label>?????????????????????</label>
            <input
              type="text"
              class="form-control"
              id="floatingPassword"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div class="form-floating mb-3">
            <label>??????????????? URL ??????????????????</label>
            <input
              type="text"
              class="form-control"
              id="floatingPassword"
              onChange={(event) => {
                setUrlpic(event.target.value);
              }}
            />
          </div>
          <div class="form-floating mb-3">
            <label>??????????????? URL ??????????????????????????????</label>
            <input
              type="text"
              class="form-control"
              id="floatingPassword"
              onChange={(event) => {
                setUrlvideo(event.target.value);
              }}
            />
          </div>
          <label>??????????????????</label>
          <div class="form-floating mb-3">
            
            <textarea
              type="text"
              class="form-control"
              id="floatingPassword"
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </div>
          <div class="form-floating mb-3">
            <label>???????????????????????????????????????????????????</label>
            <input
              type="text"
              class="form-control"
              id="floatingPassword"
              placeholder="15 ??????????????? 3 ????????????"
              onChange={(event) => {
                setSet(event.target.value);
              }}
            />
          </div>
          <div class="form-floating mb-3">
            <label>?????????????????????</label>
            <input
              type="number"
              class="form-control"
              id="floatingPassword"
              onChange={(event) => {
                setCalorie(event.target.value);
              }}
            />
          </div>

          <div className="d-grid gap-2">
            <button
              type="button"
              class="btn btn-success btn-lg "
              onClick={addExercise}
            >
              ????????????
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

AddExercise.propTypes = {
  className: PropTypes.string.isRequired,
};
export default styled(AddExercise)`
  * {
    margin: 0 auto;
  }
  .title {
    text-align: center;
  }
  .form-area {
    width: 500px;
    background-color: #f2f2f2;
    padding: 30px;
   
  }
  input[type="text"],input[type="number"],textarea {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  input[type="submit"] {
    width: 100%;
    background-color: #4caf50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  input[type="submit"]:hover {
    background-color: #45a049;
  }
`;
