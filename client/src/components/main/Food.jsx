import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

function Food({ className }) {
  const [inx, setInx] = useState([]);
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [saveFood, setSaveFood] = useState("");

  console.log(`sadasdsa`);
  useEffect(async () => {
    await axios
      .get("http://localhost:5050/api/foods/food-ingredients")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
        console.log(posts);
        console.log(`sadasdsa`);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);
  const addWorkout = (foodID) => {
    console.log(foodID);
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
        axios.post("http://localhost:5050/api/save-food/create", {
          foodID: foodID,
        }, { headers: {
          "Authorization": "Bearer " + localStorage.getItem("token_user")
        }})
        .then(()=>[
        ...saveFood,
          {
            foodID: foodID,
          }
        ]).catch((err) => {
          console.log(err.response);
        })
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  const fillterFoods = posts.filter((exercise) => {
    return exercise.foodName.includes(search);
  });
  return (
    <div className={className}>
      <div className="container">
        <div class="wrapper">
          <div class="search_box">
            <div class="search_btn">
              <i class="fas fa-search"></i>
            </div>
            <input
              type="text"
              class="input_search"
              placeholder="ค้นหา ชื่อเมนูอาหาร"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="Area">
          {fillterFoods.map((post) => (
            <div
              class="flip-card"
              onClick={() => {
                addWorkout(post.foodID);
              }}
            >
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src={post.foodImage} alt="Avatar" />
                </div>
                <div class="flip-card-back">
                  <h1>{post.foodName}</h1>

                  <table>
                    <th>วัตถุดิบ</th>
                    <th>กรัม</th>
                    {/* <tr>
                      <td>{post.ingredients[0].ingredientName}</td>
                      <td>{post.ingredients[0].quantityGram}</td>
                    </tr>
                    {}
                    <tr>
                      <td>{post.ingredients[1].ingredientName}</td>
                      <td>{post.ingredients[1].quantityGram}</td>
                    </tr> */}

                    <tr>
                      {post.ingredients.map((p) =>  {
                        <h1>{[1].ingredientName}</h1>
                        // <td>{p.ingredientName}</td>;
                      })}
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
Food.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(Food)`
  * {
    font-size: cal(60%+0.8vmin);
    margin: 0 auto;
  }
  .subheading {
    font-size: 24px;
  }
  .content {
    font-size: 18px;
  }
  .title {
    text-align: center;
    font-size: 30px;
    margin-bottom: 20px;
  }
  .container {
    width: 1300px;
  }
  .Area {
    width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 25px;
  }

  .item {
    width: 100%;
    background: rgb(0, 7, 3);
    margin-bottom: 5%;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .search {
    border-radius: 20px;
    width: 300px;
    height: 50px;
  }

  .button-63 {
    align-items: center;
    background-image: linear-gradient(144deg, #6ee0c4, #174627);
    border: 0;
    border-radius: 8px;
    box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
    box-sizing: border-box;
    color: #ffffff;
    display: flex;
    font-family: Phantomsans, sans-serif;
    font-size: 20px;
    justify-content: center;
    line-height: 1em;
    max-width: 100%;
    min-width: 140px;
    padding: 19px 24px;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    cursor: pointer;
    margin: 0;
  }

  .button-63:active,
  .button-63:hover {
    outline: 0;
    background-image: linear-gradient(144deg, #f8f8f8, #0b4126 50%, #000301);
  }
  .flip-card {
    background-color: transparent;
    width: 300px;
    height: 300px;
    perspective: 1000px;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .flip-card-front {
    background-color: #bbb;
    color: black;
  }

  .flip-card-back {
    background-color: #0fca6c;
    color: white;
    transform: rotateY(180deg);
  }

  @import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

  .wrapper {
    min-height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }

  .search_box {
    background: #559283;
    position: relative;
    padding: 15px;
    border-radius: 50px;
    display: flex;
  }

  .search_box .search_btn {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #52cfb4;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin-right: 15px;
    cursor: pointer;
  }

  .search_box .input_search {
    outline: none;
    border: 0;
    background: #acdbc7;
    border-radius: 50px;
    padding: 15px 20px;
    width: 600px;
    height: 50px;
    color: #000000;
    font-size: 20px;
  }

  ::placeholder {
    color: #fff;
  }

  ::-webkit-input-placeholder {
    color: #fff;
  }

  :-ms-input-placeholder {
    color: #fff;
  }

  .content {
    margin: 15px 0px 15px 0px;
  }
`;
