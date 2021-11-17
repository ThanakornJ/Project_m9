import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import PropTypes from "prop-types";

function Food({ className }) {
  const [posts, setPosts] = useState([]);
  const [search,setSearch]= useState("");
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
  const fillterExercises = posts.filter((exercise)=>{
    return exercise.foodName.includes(search)
})
  return (
    <div className={className}>
    <div className="container">
    <div class="wrapper">
<div class="search_box">
<div class="search_btn"><i class="fas fa-search"></i></div>
<input type="text" class="input_search" placeholder="ค้นหา ชื่อท่าออกกำลังกาย" onChange={(event) => {setSearch(event.target.value) }}/>
</div>
</div>
        <div className="Area">
            {fillterExercises.map((post) => (
                <div className="item">
                  <div className="title">{post.foodName}</div>
                    <br />
                    <div className="Area2">
                        <div className="area-img">
                            <img src={post.foodImage}></img>
                            <div className="area-content">
                                   {/* <div className="subheading">วิธีทำ<br/></div>
                                   <p className="content">&nbsp;&nbsp;&nbsp;&nbsp;{post.description}</p>
                                   <div className="subheading">จำนวนครั้งในการเล่น</div>
                                   <p className="content">{post.set} </p>
                                   <div className="subheading">เบิร์นแคลอรี่ได้ถึง</div>
                                   <p className="content">{post.exerciseCalories} แคลอรี่</p> */}
                                {/* <button class="button-63" role="button"onClick={() => {
                                            addWorkout(
                                                post.exerciseID,
                                                post.exerciseCalories,
                                                post.exerciseName,
                                                post.amount
                                            );
                                        }}>เลือกท่าออกกำลังกายนี้</button> */}
                            </div>
                        </div>
                        <div className="area-video">
                            <iframe
                                src={post.video}
                                frameborder="0"
                                allowfullscreen
                            ></iframe>
                            
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
*{
  margin: 0 auto;
}
  .container {
 
  }
  .title{
    text-align:center;
  }
  .warpper{
    width:1200px;
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-gap:20px;
    /* border:1px solid black; */
    

  }
  .item{
    width:100%;
    border:1px solid black;
text-align:start;
    padding: 10px;

  }
  img{
      width:100%
  }
  .title-content{
    font-size:28px
  }
  .content{
    font-size:25px
  }
  *{
    font-size:cal(60%+0.8vmin);
    margin: 0 auto;
}
.subheading{
    font-size:24px;
}
.content{
    font-size:18px;

}
.title{
    text-align:center;
    font-size:30px;
    margin-bottom: 20px; 
}
.container{
    width: 1300px;
}
.Area{
    width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr ;
    grid-gap: 25px;
}
.Area2{
    width:1100px;
   margin: 0 auto;
   height: 700px;
   display: grid;
   grid-column-gap:50px;
   grid-template-columns: 35% 65%;
   margin-bottom:30px;
}
.item{
 padding: 50px;
/* width: 100%; */
/* height: 450px; */
background: rgb(148, 221, 185);
margin-bottom: 5%;
}
.item iframe{
    width: 100%;
    height: 100%;
}
.area-img {
    padding: 0 20 20 20;
    width: 100%;
    height: 270px;
    
  
}

.area-video{
    height: 100%;
    width: 80%;
   
}
.area-video iframe{
    height: 400px;

}
.area-img img{ 
margin-bottom: 20px;
    width: 80%;
    height: 100%;
}
.search{
    border-radius:20px;
    width: 300px;
    height: 50px;
}

.button-63 {
  align-items: center;
  background-image: linear-gradient(144deg,#6ee0c4,#174627);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px; 
  box-sizing: border-box;
  color: #FFFFFF;
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
  background-image: linear-gradient(144deg,#f8f8f8, #0b4126 50%,#000301);
}
`;
