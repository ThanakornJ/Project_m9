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
    <p className="w3-justify">Health, according to the World Health Organization, is "a state of complete physical, mental and social well-being and not merely the absence of disease and infirmity". A variety of definitions have been used for different purposes over time. Health can be promoted by encouraging healthful activities, such as regular physical exercise and adequate sleep,[2] and by reducing or avoiding unhealthful activities or situations, such as smoking or excessive stress. Some factors affecting health are due to individual choices, such as whether to engage in a high-risk behavior, while others are due to structural causes, such as whether the society is arranged in a way that makes it easier or harder for people to get necessary healthcare services. Still other factors are beyond both individual and group choices, such as genetic disorders.</p>
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
        <p>Health</p>
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


