import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import PropTypes from "prop-types";

function Homepage({className}) {
  const [posts, setPosts] = useState([]);
  console.log(`sadasdsa`);
  useEffect(async () => {
    await axios
      .get("http://localhost:5050/api/target")
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

  return (
    <div className={className}>
             <div className="w3-container w3-content w3-center w3-padding-10"  id="band">
    <h2 className="w3-wide">AVO</h2>
    <p className="w3-opacity"><i>We love Health</i></p>
    <p className="w3-justify">We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <div className="w3-row w3-padding-32">
      <div className="w3-third">
        <p>Food</p>
        <img src="https://www.scb.co.th/content/dam/scb/personal-banking/stories-tips/thai-food/thai-food10.jpg" className="w3-round w3-margin-bottom" alt="Random Name" />
      </div>
      <div class="w3-third">
        <p>Exercise</p>
        <img src="https://www.planetfitness.com/sites/default/files/feature-image/xbreak-workout_602724.jpg.pagespeed.ic.v8byD7su-e.jpg" className="w3-round w3-margin-bottom" alt="Random Name" />
      </div>
      <div className="w3-third">
        <p>Heath</p>
        <img src="https://www.samyan-mitrtown.com/wp-content/uploads/2020/09/%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%A0%E0%B8%B2%E0%B8%9E1-1.jpg" className="w3-round" alt="Random Name" />
      </div>
    </div>
  </div>



</div>



  


  );
}

Homepage.propTypes = {
    className:PropTypes.string.isRequired
}
export default styled(Homepage)`

*{
   
}
img{
    width:100%;
    height: 250px;
    padding: 15px;
}
img:hover{
    border:10px solid gray;
    transition:0.5s;
}
.container{
    width:100%;
    height: 100vh;
    background-image:linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(images/w1.png);
    background-position:center;

}
`


