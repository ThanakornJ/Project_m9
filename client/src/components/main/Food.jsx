import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import PropTypes from "prop-types";

function Food({ className }) {
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
      <div className="container">
        <center>
      <input class="search" type="search" placeholder="Search....."  />
</center>
        <h1 className="title">เมนูอาหาร</h1>
        <div className="warpper">
           <div className="item">
              <h2>ชื่อเมนู ......</h2>
               <img src="https://img.wongnai.com/p/1920x0/2020/09/01/67ba09fcb72845bc81fd413036e3f4eb.jpg" alt="" srcset="" />
              <h2>แคลอรี่...... cal</h2>
               
               <button>Select</button>
           </div>
           <div className="item">
              <h2>ชื่อเมนู ......</h2>
               <img src="https://img.wongnai.com/p/1920x0/2020/09/01/67ba09fcb72845bc81fd413036e3f4eb.jpg" alt="" srcset="" />
              <h2>แคลอรี่...... cal</h2>
               
               <button>Select</button>
           </div><div className="item">
              <h2>ชื่อเมนู ......</h2>
               <img src="https://img.wongnai.com/p/1920x0/2020/09/01/67ba09fcb72845bc81fd413036e3f4eb.jpg" alt="" srcset="" />
              <h2>แคลอรี่...... cal</h2>
               
               <button>Select</button>
           </div><div className="item">
              <h2>ชื่อเมนู ......</h2>
               <img src="https://img.wongnai.com/p/1920x0/2020/09/01/67ba09fcb72845bc81fd413036e3f4eb.jpg" alt="" srcset="" />
              <h2>แคลอรี่...... cal</h2>
               
               <button>Select</button>
           </div><div className="item">
              <h2>ชื่อเมนู ......</h2>
               <img src="https://img.wongnai.com/p/1920x0/2020/09/01/67ba09fcb72845bc81fd413036e3f4eb.jpg" alt="" srcset="" />
              <h2>แคลอรี่...... cal</h2>
               
               <button>Select</button>
           </div><div className="item">
              <h2>ชื่อเมนู ......</h2>
               <img src="https://img.wongnai.com/p/1920x0/2020/09/01/67ba09fcb72845bc81fd413036e3f4eb.jpg" alt="" srcset="" />
              <h2>แคลอรี่...... cal</h2>
               
               <button>Select</button>
           </div><div className="item">
              <h2>ชื่อเมนู ......</h2>
               <img src="https://img.wongnai.com/p/1920x0/2020/09/01/67ba09fcb72845bc81fd413036e3f4eb.jpg" alt="" srcset="" />
              <h2>แคลอรี่...... cal</h2>
               
               <button>Select</button>
           </div><div className="item">
              <h2>ชื่อเมนู ......</h2>
               <img src="https://img.wongnai.com/p/1920x0/2020/09/01/67ba09fcb72845bc81fd413036e3f4eb.jpg" alt="" srcset="" />
              <h2>แคลอรี่...... cal</h2>
               
               <button>Select</button>
           </div><div className="item">
              <h2>ชื่อเมนู ......</h2>
               <img src="https://img.wongnai.com/p/1920x0/2020/09/01/67ba09fcb72845bc81fd413036e3f4eb.jpg" alt="" srcset="" />
              <h2>แคลอรี่...... cal</h2>
               
               <button>Select</button>
           </div><div className="item">
              <h2>ชื่อเมนู ......</h2>
               <img src="https://img.wongnai.com/p/1920x0/2020/09/01/67ba09fcb72845bc81fd413036e3f4eb.jpg" alt="" srcset="" />
              <h2>แคลอรี่...... cal</h2>
               
               <button>Select</button>
           </div><div className="item">
              <h2>ชื่อเมนู ......</h2>
               <img src="https://img.wongnai.com/p/1920x0/2020/09/01/67ba09fcb72845bc81fd413036e3f4eb.jpg" alt="" srcset="" />
              <h2>แคลอรี่...... cal</h2>
               
               <button>Select</button>
           </div><div className="item">
              <h2>ชื่อเมนู ......</h2>
               <img src="https://img.wongnai.com/p/1920x0/2020/09/01/67ba09fcb72845bc81fd413036e3f4eb.jpg" alt="" srcset="" />
              <h2>แคลอรี่...... cal</h2>
               
               <button>Select</button>
           </div><div className="item">
              <h2>ชื่อเมนู ......</h2>
               <img src="https://img.wongnai.com/p/1920x0/2020/09/01/67ba09fcb72845bc81fd413036e3f4eb.jpg" alt="" srcset="" />
              <h2>แคลอรี่...... cal</h2>
               
               <button>Select</button>
           </div>
           
             </div>
          {posts.map((post) => (
            <div className="warpper">
             <div className="item">น้ำหนัก</div>
             <div className="item"></div>

               

               
              
            </div>
          ))}
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
`;
