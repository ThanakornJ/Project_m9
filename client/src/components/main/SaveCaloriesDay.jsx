import React from "react";
import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import axios from "axios";
function SaveCaloriesDay({ className }) {
    const [username,setUsername] = useState("");
    const [password,setPassword]= useState("");
    return (
        <div className={className}>
            <div className="container">
            
                <h1 className="title">แคลอรี่ที่บริโภคในวันนี้</h1>
                <div id="progress"></div>   
                
            </div>
        </div>
    );
}
SaveCaloriesDay.propTypes = {
    className: PropTypes.string.isRequired,
};
export default styled(SaveCaloriesDay)`
  *{
    margin: 0 auto;
  }
  .title {
    text-align: center;
  }
  #progress {
    background: #333;
    border-radius: 13px;
    height: 50px;
    width: 600px;
    padding: 3px;
}

#progress:after {
    content: '';
    display: block;
    background: #0be76e;
    width: 50%;
    height: 100%;
    border-radius: 9px;
}
`;
